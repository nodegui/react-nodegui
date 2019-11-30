export function throwUnsupported(instance: object) {
  throw new Error(
    `Unsupported operation performed in ${instance.constructor.name}`
  );
}

export function isValidUrl(str: string) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}
