function solution(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr
    .map((x) => {
      var str = x.toString(2);
      return str.split("").reduce((x, y) => parseInt(x) + parseInt(y), 0);
    })
    .reduce((x, y) => x + y, 0);
}
