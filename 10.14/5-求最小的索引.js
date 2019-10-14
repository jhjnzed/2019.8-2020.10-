


// 5.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引，如果这样的元素个数大于1，
// 则返回索引最小的数的索引



var arr= [1,2,4,5,10,100,2,22];
console.log(getArrayMax(arr));

function getArrayMax(arr) {

    var min = arr[0];
    var index = 0; // 储存最小值的索引
    // 首先求出遍历数组
    for (var i = 0; i < arr.length; i++) {

        // 求出最小值
        if(arr[i] < min){

            min = arr[i];
            index = i;
        }
    }
    
    // 判断是否大于1
    // 满足条件返回索引
    return min > 1 ? index : min;
}