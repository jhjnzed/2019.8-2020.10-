// 13.  将下面的数组元素前后互换
//          [11, 32，55, 47，79，23]	
//           置换后的数组元素为：
//           [23, 79, 47, 55, 32, 11]






var arr = [11, 32, 55, 47, 79, 23];

for (var min = 0, max = arr.length - 1; min < max; min++, max--){//创建两个变量max，和min，
    // 相当于数组的第一位和最后一位，
    // 让第一位和最后一位元素交换，
    // 交换完成后自增，
    // 然后第二个和倒数第二个交换，

    var temp = arr[min];
    arr[min] = arr[max];
    arr[max] = temp;
}
console.log(arr)