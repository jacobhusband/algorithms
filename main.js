function solution(a) {
  // make each dec to bin
  // reverse the array and join
  // make bin to dec
  return parseInt(
    a
      .map((x) => ("00000000" + x.toString(2)).slice(-8))
      .reverse()
      .join(""),
    2
  );
}
