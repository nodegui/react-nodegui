export function throwUnsupported(instance: object) {
  throw new Error(
    `Unsupported operation performed in ${instance.constructor.name}`
  );
}

export function isValidUrl(str: string) {
  try {
    const url = new URL(str);
    return url.protocol === "http" || url.protocol === "https";
  } catch (_) {
    return false;
  }
}
