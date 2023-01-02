function solution(candlesNumber, makeNew) {
  let solution = candlesNumber;
  let leftOvers = candlesNumber;
  let newCandles;
  while (leftOvers >= makeNew) {
    newCandles = Math.trunc(leftOvers / makeNew);
    leftOvers = (leftOvers % makeNew) + newCandles;
    solution += newCandles;
  }
  return solution;
}
console.log(solution(5, 2));
