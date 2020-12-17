export function prettyDateUTC(timestamp = null) {
  if (typeof timestamp === "string") return timestamp;
  const hours = new Date(timestamp).getUTCHours();
  const minutes = new Date(timestamp).getUTCMinutes();
  const seconds = new Date(timestamp).getUTCSeconds();

  return `${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }:${seconds > 9 ? seconds : "0" + seconds}`;
}

export function prettyDate(timestamp = null) {
  if (typeof timestamp === "string") return timestamp;
  const hours = new Date(timestamp).getHours();
  const minutes = new Date(timestamp).getMinutes();
  const seconds = new Date(timestamp).getSeconds();

  return `${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }:${seconds > 9 ? seconds : "0" + seconds}`;
}
