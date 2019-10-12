// 9.定义一个整数数组，包含元素[1,3,4,7,8]，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。



var arr = [1,3,4,7,8];

// 定义变量计数
var sum = 0;

var str = '';
// 遍历数组
for(var i = 0; i < arr.length; i++){

    if(arr[i] % 2 == 0){
        sum++;
        str = str + i + ' ';
    }
}
// 如果是偶数，记录下标，计数器自增
console.log('下表是:' + str);
console.log('个数是:' + sum);