// 66.定义一个三位数，求各位数的总和是多少，在控制台输出



var num = 123;
var num1 = num % 10;
var num2 = parseInt(num / 10 % 10);
var num3 = parseInt(num / 100 % 10);
var sum=num1+num2+num3;
console.log(num+'各位数的总和是'+sum);
