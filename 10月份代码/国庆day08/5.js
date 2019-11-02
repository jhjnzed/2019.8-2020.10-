// 65. 定义一个四位数，按逆序打印出各位数字。例如原数字为4321，应输出1234



var num = 1234;
var num1 = num % 10;
var num2 = parseInt(num / 10 % 10);
var num3 = parseInt(num / 100 % 10);
var num4 = parseInt(num / 1000 % 10);
console.log(num+'的逆顺序的结果是'+num1+num2+num3+num4);
