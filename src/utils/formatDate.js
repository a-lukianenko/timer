export function formatDate(timestamp = null, UTC = false) {
  return UTC
    ? new Date(timestamp).toUTCString().slice(-12, -4)
    : new Date(timestamp).toTimeString().slice(0, 8);
}
