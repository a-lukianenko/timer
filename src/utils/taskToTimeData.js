import getRandomColor from "./getRandomColor";
export function taskToTimeData(task) {
  const { title, startTime, endTime } = task;

  const startHour = new Date(startTime).getHours();
  const startMinute = new Date(startTime).getMinutes();

  const endHour = new Date(endTime).getHours();
  const endMinute = new Date(endTime).getMinutes();

  if (startHour === endHour)
    return {
      title,
      fill: getRandomColor(),
      [startHour]: endMinute - startMinute,
    };

  const data = {
    title,
    fill: getRandomColor(),
    [startHour]: 60 - startMinute,
    [endHour]: endMinute,
  };

  for (let i = startHour + 1; i < endHour; i++) {
    data[i] = 60;
  }

  return data;
}
