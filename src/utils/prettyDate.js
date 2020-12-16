export default function prettyDate(timestamp = null) {
  return typeof timestamp === "string"
    ? timestamp
    : new Date(timestamp).toUTCString().slice(-12, -4);
}
