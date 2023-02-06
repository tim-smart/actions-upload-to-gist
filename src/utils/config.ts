export const nonEmptyString = (name: string) =>
  Config.string(name)
    .map((_) => _.trim())
    .validate("must not be empty", (_) => _ !== "")
