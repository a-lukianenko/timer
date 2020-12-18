export function taskToTimeData(task) {
  const { startTime, endTime } = task;

  const startHour = new Date(startTime).getHours();
  const startMinute = new Date(startTime).getMinutes();

  const endHour = new Date(endTime).getHours();
  const endMinute = new Date(endTime).getMinutes();

  const data = [
    {
      hour: startHour,
      minutes: 60 - startMinute,
    },
  ];

  for (let i = startHour + 1; i < endHour; i++) {
    data.push({
      hour: i,
      minutes: 60,
    });
  }
  data.push({ hour: endHour, minutes: endMinute });
  return data;
}
