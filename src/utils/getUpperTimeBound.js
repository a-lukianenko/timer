export default function getUpperTimeBound(data) {
  let biggest = 0;
  for (const task of data) {
    const keys = Object.keys(task);
    for (const key of keys) {
      if (+key > biggest) biggest = +key;
    }
  }
  return biggest;
}
