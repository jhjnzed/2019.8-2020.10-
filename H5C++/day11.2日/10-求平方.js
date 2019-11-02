// 10.定义一个三位数，求各位数的平方和是多少，在控制台输出。
var num = 123;
let gw = num % 10;
let a = gw * gw;
let sw = parseInt(num / 10 % 10);
let b = sw * sw;
let bw = parseInt(num / 100);
let c = bw * bw;
console.log(gw + "的平方是" + a, sw + '的平方是' + b, bw + '是' + c)