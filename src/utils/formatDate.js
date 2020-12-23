export function formatDate(timestamp = null, UTC = false) {
  if (typeof timestamp === "string") return timestamp;

  let hours, minutes, seconds;
  if (UTC) {
    hours = new Date(timestamp).getUTCHours();
    minutes = new Date(timestamp).getUTCMinutes();
    seconds = new Date(timestamp).getUTCSeconds();
  } else {
    hours = new Date(timestamp).getHours();
    minutes = new Date(timestamp).getMinutes();
    seconds = new Date(timestamp).getSeconds();
  }

  return `${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }:${seconds > 9 ? seconds : "0" + seconds}`;
}
