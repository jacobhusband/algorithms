function sumIntervals(intervals) {
  const obj = {};
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < intervals[i].length; j++) {
      if (j === 0 && obj[intervals[i][j]] === undefined) {
        obj[intervals[i][j]] = [1];
      } else if (j === 1 && obj[intervals[i][j]] === undefined) {
        obj[intervals[i][j]] = [2];
      } else if (j === 0) {
        obj[intervals[i][j]].push(1);
      } else if (j === 1) {
        obj[intervals[i][j]].push(2);
      }
    }
  }
  const arr = Object.entries(obj).sort((a, b) => Number(a[0]) - Number(b[0]));
  let prevValue;
  let prevKey;
  let start;
  let startCount = 0;
  let sum = 0;
  for (const [key, value] of arr) {
    if (!prevValue) start = key;
    if (startCount === 0 && prevKey) {
      sum += prevKey - start;
      start = key;
    }
    value.forEach((num) => {
      if (num === 1) startCount++;
      else startCount--;
    });
    prevKey = key;
    prevValue = value;
  }
  sum += prevKey - start;
  return sum;
}

console.log(
  sumIntervals([
    [0, 20],
    [-1e8, 10],
    [30, 40],
  ])
);

console.log(sumIntervals([[-1e9, 1e9]]));
