function tasksToTimeData(tasks) {
  const dataArray = [];

  for (const task of tasks) {
    const { title, startTime, endTime } = task;

    const startHour = new Date(startTime).getHours();
    const startMinute = new Date(startTime).getMinutes();

    const endHour = new Date(endTime).getHours();
    const endMinute = new Date(endTime).getMinutes();

    const data = { title };
    if (startHour === endHour) {
      dataArray.push({
        title,
        [startHour]: endMinute - startMinute,
      });
      continue;
    }

    data[startHour] = 60 - startMinute;
    data[endHour] = endMinute;

    for (let i = startHour + 1; i < endHour; i++) {
      data[i] = 60;
    }

    dataArray.push(data);
  }
  return dataArray;
}

export function convertForRecharts(exampleData) {
  const data = tasksToTimeData(exampleData);
  const arrayOfObjects = [];

  data.forEach(object => {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      !isNaN(+keys[i]) &&
        arrayOfObjects.push({
          hour: +keys[i],
          [object.title]: object[keys[i]],
        });
    }
  });

  const final = [];
  arrayOfObjects.forEach((item, i, arr) => {
    const indeces = [];
    arr.forEach((obj, index) => {
      if (obj.hour === item.hour && index > i) indeces.push(index);
    });

    indeces.length &&
      indeces.forEach(index => {
        item = { ...item, ...arr[index] };
      });

    final.push(item);
  });

  return final.filter(
    (obj, i, arr) => arr.findIndex(t => t.hour === obj.hour) === i
  );
}
