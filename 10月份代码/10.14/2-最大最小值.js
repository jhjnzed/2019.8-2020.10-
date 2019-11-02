// 2.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 
// 使用while循环找出里面的最小值?


var arr=[10, 5, 34, 59, 98];
var max = arr[0]

for(var i = 0; i < arr.length;i++){     // 循环 遍历
    if(max < arr[i]){   // 如果arr[i] 大于第一个元素那么把值赋予给max 
        max = arr[i]
    }
}
console.log(max);



var arr=[10, 5, 34, 59, 98];

var min = arr[0];

var i=0;
while (i<arr.length) {
    if(min>arr[i]){    //  相反 
        min=arr[i];
    }
    i++    //  步进
}console.log(min);
