function createTimestamps() {
  const timeStamps = [];

  for (let i = 0; i < 2; i++) {
    const hour = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    timeStamps.push(new Date().setHours(hour, minutes, seconds));
  }
  return timeStamps.sort((a, b) => a - b);
}

export function createTaskData() {
  const taskTitles = [
    "learn JavaScript",
    "learn HTML",
    "learn React",
    "learn CSS",
    "learn Redux",
    "learn Node",
    "learn Material UI",
    "learn React Router",
    "learn Redux Saga",
    "learn TypeScript",
  ];

  const taskData = [];

  for (let title of taskTitles) {
    const [startTime, endTime] = createTimestamps();

    taskData.push({
      title,
      startTime,
      endTime,
      timeSpent: endTime - startTime,
    });
  }
  return taskData;
}

// export const taskTitles = [
//   {
//     title: "learn JavaScript",
//     startTime: new Date().setHours(0, 15),
//     endTime: new Date().setHours(1, 20),
//     timeSpent: 3900000,
//   },
//   {
//     title: "learn HTML",
//     startTime: new Date().setHours(1, 45),
//     endTime: new Date().setHours(2, 5),
//     timeSpent: 1200000,
//   },
//   {
//     title: "learn CSS",
//     startTime: new Date().setHours(2, 10),
//     endTime: new Date().setHours(3, 0),
//     timeSpent: 3000000,
//   },
// ];

// "learn React",
// "learn CSS",
// "learn Redux",
// "learn Node",
// "learn Material UI",
// "learn React Router",
// "learn Redux Saga",
// "learn TypeScript",
