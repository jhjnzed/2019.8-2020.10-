var num1 = 123;
var num2 ="123"
console.log(num1+num2)  // ?     123123    字符串加数字  变成 字符串
console.log(num1 + +num2)  // ?    246    数字加字符串变成数字等于数字加数字
console.log(num1 + !! num2)  // ?     124     数字 加   两个并非就是 ：是 字符串所以为true=1
console.log(num1+Number(num2))  // ?    246    和第二个一样   number = ++