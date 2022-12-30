function solution(n) {
  const stringNum = n.toString().split("");
  for (let i = stringNum.length - 1; i >= 1; i--) {
    if (Number(stringNum[i]) >= 5) {
      stringNum[i - 1] = (Number(stringNum[i - 1]) + 1).toString();
    }
    stringNum[i] = "0";
  }
  return Number(stringNum.join(""));
}
