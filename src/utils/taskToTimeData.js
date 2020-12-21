export function taskToTimeData(task) {
  const { startTime, endTime } = task;

  const startHour = new Date(startTime).getHours();
  const startMinute = new Date(startTime).getMinutes();

  const endHour = new Date(endTime).getHours();
  const endMinute = new Date(endTime).getMinutes();

  if (startHour === endHour)
    return [{ hour: startHour, minutes: endMinute - startMinute }];

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
  return data.concat([{ hour: endHour, minutes: endMinute }]);
}
