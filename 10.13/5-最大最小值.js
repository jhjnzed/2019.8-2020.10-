// 15. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]



var arr = [11, 32.55, 47, 79, 23];

var max = arr[0];  // 定义最大值和最小
var min = arr[0];

for (var i = 0; i < arr.length; i++) {  


    if(arr[i] > max){  // 如果有大于最大值的那么把这个值给max   ，min相反
        max = arr[i];
    }

    if(arr[i] < min){
        min = arr[i];
    }
}


console.log('数组里面最大值是:' + max + '\n最小值是:' + min);