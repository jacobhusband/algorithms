function solution(n) {
  const stringNum = n.toString();
  let flag = true;
  for (let i = stringNum.length - 1; i >= 0; i--) {
    if (stringNum[i] === "0" && flag) {
    } else {
      flag = false;
      if (stringNum[i] === "0") return true;
    }
  }
  return false;
}
