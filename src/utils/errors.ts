export function assert(value: unknown, errorMessage: string): asserts value {
  if (!value) {
    throw Error(errorMessage);
  }
}
