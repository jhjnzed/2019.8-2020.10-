// 3.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。



var arr= [10, 5, 34, 59, 98];

for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - 1 - i; j++) {
    // 什么时候交换位置 --- 如果arr[j]> arr[j+1]
    if (arr[j] < arr[j + 1]) {
      // 使用临时变量接收 arr[j];
      var temp = arr[j];
      // arr[j+1]的值给arr[j]
      arr[j] = arr[j + 1];
      // 把临时变量存的值给arr[j+1]
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);










// var result = arr.sort(function (a,b) { return b-a})
// console.log(result)