function convertQueryToMap(query) {
  if (!query.length) return {};
  let tempArr, tempArr2, tempNames, prop, assigner;
  let result = {};
  const arr = query
    .split("&")
    .map((str) => {
      tempArr = str.split("=");
      tempArr[0] = tempArr[0].split(".");
      tempArr[1] = tempArr[1].split("%20").join(" ");
      tempArr[1] = tempArr[1].split("%26").join("&");
      tempArr[1] = tempArr[1].split("%3D").join("=");
      tempArr[1] = tempArr[1].split("%3F").join("?");
      return tempArr;
    })
    .sort((a, b) => a[0].length - b[0].length);
  tempArr = new Array(arr.length).fill(result);
  for (let i = 0; i < arr[arr.length - 1][0].length; i++) {
    tempNames = [];
    tempArr2 = [];
    for (let j = 0; j < arr.length; j++) {
      prop = arr[j][0][i];
      assigner = tempArr[j];
      tempNames.push(prop);
      if (prop !== undefined) {
        if (i === arr[j][0].length - 1) assigner[prop] = arr[j][1];
        else assigner[prop] = {};
      }
    }
    for (let k = 0; k < arr.length; k++)
      tempArr2.push(tempArr[k][tempNames[k]]);
    tempArr = tempArr2;
  }
  return result;
}

convertQueryToMap(
  "user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie"
);
