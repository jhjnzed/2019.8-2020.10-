arr = [1, 3, 2, 8, 6, 11, 9]
// arr.sort(function (a, b){return a-b});

// console.log(arr);

// 步骤: 升序
// 1.确定外层循环的次数 规律是: 数组的长度-1
for (var i = 0; i < arr.length - 1; i++) {
    // 2.确定内层循环的次数 规律是: 数组的长度-1-i;
    for (var j = 0; j < arr.length - 1 - i; j++) {
        // 3.确定内侧循环中前后两个元素位置的交`换: 
        // 3.1 判断 如果当前数 < 下一个数 那么就交换位置
        if (arr[j] > arr[j + 1]) {
            // 3.1.1 声明临时变量
            // 3.1.2 让临时变量等于当前数
            var temp = arr[j];
            // 3.1.3 让当前数等于下一个数
            arr[j] = arr[j + 1];
            // 3.1.4 让下一个数等于临时变量
            arr[j + 1] = temp;
        }

    }

}
console.log(arr);