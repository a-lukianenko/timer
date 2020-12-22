function createTimestamp() {
  const hour = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  return new Date().setHours(hour, minutes, seconds);
}

export function createTaskData() {
  let taskTitles = [
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
    const task = {
      title,
    };

    let startTime = createTimestamp();
    let endTime = createTimestamp();

    if (startTime < endTime) {
      task.startTime = startTime;
      task.endTime = endTime;
      task.timeSpent = endTime - startTime;
    }
    if (startTime > endTime) {
      task.startTime = endTime;
      task.endTime = startTime;
      task.timeSpent = startTime - endTime;
    }

    taskData.push(task);
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
