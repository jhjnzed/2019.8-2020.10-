// 19. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。

var num = 456;
num = num +'';

var arr = num.split('');    
for (var i = arr.length-1 ;i >= 0; i--) {

console.log(arr[i]);

}


