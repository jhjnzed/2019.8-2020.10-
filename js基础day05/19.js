// 19. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。

// var num = 456;
// num = num +'';

// var arr = num.split('');    
// for (var i = arr.length-1 ;i >= 0; i--) {

// console.log(arr[i]);

// }


var num = 123

var g = num % 10   

var s = parseInt(num/10) % 10    

var b = parseInt( num / 100 ) 

console.log(`${g}${s}${b}`)
