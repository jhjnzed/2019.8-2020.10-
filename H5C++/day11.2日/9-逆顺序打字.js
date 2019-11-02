
// 9. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
var num = 321;
let gw = num % 10;
let sw = parseInt(num / 10 % 10);
let bw = parseInt(num / 100);
console.log(gw, sw, bw)