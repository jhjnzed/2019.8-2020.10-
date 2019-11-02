// 8.将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序


var arr= [1,3,2,8,6,11,9]

for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - 1 - i; j++) {
    // 什么时候交换位置 --- 如果arr[j]> arr[j+1]
    if (arr[j] > arr[j + 1]) {
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