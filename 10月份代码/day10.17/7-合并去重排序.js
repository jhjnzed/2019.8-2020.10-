
var arr1 = [1, 7, 9, 11, 8, 15, 10, 19];
var arr2 = [2, 1, 6, 8, 10];
var arr3 = arr1.concat(arr2);

var uniqArr = _.uniq(arr3);
console.log(uniqArr);
uniqArr.sort(function (a, b) { return a - b });
console.log(uniqArr);