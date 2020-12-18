const task1 = {
  startTime: new Date(),
  endTime: new Date().setHours(16, 45),
  timeSpent: this.startTime.getTime() - this.endTime.getTime(),
};

// const task2 = {
//   startTime: new Date().setHours(8, 50),
//   endTime: new Date().setHours(10, 35),
// };

// const tasks = [task1, task2];

function taskToData(task) {
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
  data.push({ hour: endHour, minutes: 60 - endMinute });
}
