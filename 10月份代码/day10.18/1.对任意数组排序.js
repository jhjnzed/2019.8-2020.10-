// 1. 写一个函数，实现对任意数组的排序

function sort(arr) {  // 设置 形参
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr1 = sort([1, 4, 2, 9]);     //实参
console.log(arr1);
var arr2 = sort([11, 7, 22, 999]);
console.log(arr2);