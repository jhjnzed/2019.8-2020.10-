// 11.现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
//    1. 遍历打印二维数组的所有元素
//    2. 计算二维数组中所有元素的和
//    3. 求二维数组中所有元素的最大值。




var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]; 

var max = array[0][0];
var sum = 0; // 求和

// 遍历二维数组
for (var i = 0; i < array.length; i++) {   // 第一个数组的长度

    for (var j = 0; j < array[i].length; j++) {  // 二维数组中的遍历

        console.log(array[i][j]);  // 打印所有元素 
        sum = sum + array[i][j];    //  元素的和

        if (array[i][j] > max) {   // 判断 第一个数组第一个值是否大于某个值 否则就循环找到最大的值
            max = array[i][j];
        }
    }
}

console.log('最大值是:'+max)
console.log('总和是:' + sum);