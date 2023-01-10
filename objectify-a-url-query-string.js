function convertQueryToMap(query) {
  let tempArr, tempObj, tempObjUpper, tempObjLower;
  let result = {};
  const arr = query
    .split("&")
    .map((str) => {
      tempArr = str.split("=");
      tempArr[0] = tempArr[0].split(".");
      tempArr[1] = tempArr[1].split("%20").join(" ");
      return tempArr;
    })
    .sort((a, b) => a[0].length - b[0].length);
  tempObjUpper = result;
  for (let i = 0; i < arr[arr.length - 1][0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!i) tempObjUpper[arr[j][0][i]] = {};
      if (i && arr[j][0][i] !== undefined) {
        tempObjLower = tempObjUpper[arr[j][0][i - 1]];
        i === arr[j][0].length - 1
          ? (tempObjLower[arr[j][0][i]] = arr[j][1])
          : (tempObjLower[arr[j][0][i]] = {});
      }
      if (j === arr.length - 1 && i)
        tempObjUpper = tempObjUpper[arr[j][0][i - 1]];
    }
  }
  return result;
}

convertQueryToMap(
  "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"
);
