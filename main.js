function solution(lastNumberOfDays) {
  // make an array of the length of all months
  // find the location of all the months with lastNumberOfDays and save the next month in an object
  // retrieve the keys from the object and store them in an array and return it
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var storage = {};
  for (var i = 0; i < 12; i++) {
    if (lastNumberOfDays === months[i]) {
      if (i !== 11) {
        storage[months[i + 1]] = 1;
      } else {
        storage[months[0]] = 1;
      }
    }
  }
  return Object.keys(storage).map((x) => parseInt(x));
}
