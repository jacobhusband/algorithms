function sumIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  let sum = end - start;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][1] <= end) continue;
    if (intervals[i][0] < end) intervals[i][0] = end;
    start = intervals[i][0];
    end = intervals[i][1];
    sum += end - start;
  }
  return sum;
}
