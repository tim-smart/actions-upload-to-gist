import type { Option } from "@fp-ts/core/Option"
import { Gist } from "./Gist"
import * as CT from "./CommentTracker"

const meta = Schema.struct({
  gistId: Schema.string,
})

const { Tag: CommentTracker, Live: LiveCommentTracker } = CT.makeLayer(
  "GistDeploy",
  meta,
)

const make = Do(($) => {
  const comment = $(CommentTracker.access)
  const gist = $(Gist.access)

  const gistUrl = ({
    html_url,
    files,
  }: {
    files?: Record<string, { raw_url?: string } | null>
    html_url?: string
  }) => {
    const entries = Object.entries(files!)

    if (entries.length === 1) {
      const [, file] = entries[0]
      return file!.raw_url!
    }

    return html_url!
  }

  const update = (id: Option<string>, path: string) =>
    id
      .match(
        () => gist.createAndAdd(path),
        (_) => gist.cloneAndAdd(_, path),
      )
      .map((_) => [_.id!, gistUrl(_)] as const)

  const upsert = (path: string, fallbackId: Option<string>) =>
    comment
      .upsert((prevMeta) =>
        Do(($) => {
          const info = $(
            update(
              prevMeta.map((_) => _.gistId),
              path,
            ),
          )

          const [gistId, url] = info

          return [`Deployed to Gist: ${url}`, { gistId }, info] as const
        }),
      )
      .catchTag("IssueNotFound", (_) =>
        fallbackId
          .match(() => Effect.fail(_), Effect.succeed)
          .flatMap((gistId) => update(Option.some(gistId), path)),
      )

  return { upsert }
})

export interface GistDeploy extends Effect.Success<typeof make> {}
export const GistDeploy = Tag<GistDeploy>()
export const LiveGistDeploy = LiveCommentTracker >> make.toLayer(GistDeploy)
