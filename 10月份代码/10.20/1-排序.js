
//1.用函数实现任意数组从小到大的排序，不允许使用sort 




function a() {

    var arr = [1, 3, 4, 23, 30, 63, 31];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }
        }
    }
    console.log(arr)

    return arr;
}

a()