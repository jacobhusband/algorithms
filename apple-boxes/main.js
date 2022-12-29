function solution(k) {
  let red = 0;
  let yellow = 0;
  for (let i = k; i > 0; i--) {
    if (i % 2 === 0) {
      red += i ** 2;
    } else {
      yellow += i ** 2;
    }
  }
  return red - yellow;
}
