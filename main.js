function solution(n, k) {
  var strNum = convertToBits(n);
  var newStr = replaceLetter(strNum, strNum.length - k, "0");
  return convertToNum(newStr);
}

function replaceLetter(str, ind, char) {
  var output = "";
  for (var i = 0; i < str.length; i++) {
    if (i === ind) {
      output += char;
    } else {
      output += str[i];
    }
  }
  return output;
}

function convertToBits(n) {
  var output = "";
  var num = 2 ** 30;
  var firstOne = false;
  while (num !== 0) {
    if (n / num >= 1) {
      firstOne = true;
      output += 1;
      n = n % num;
    } else if (firstOne) {
      output += 0;
    }
    num = Math.floor(num / 2);
  }
  return output;
}

function convertToNum(b) {
  var output = 0;
  var startNum = 2 ** b.length;
  for (var i = 0; i < b.length; i++) {
    startNum = startNum / 2;
    if (b[i] === "1") {
      output += startNum;
    }
  }
  return output;
}
