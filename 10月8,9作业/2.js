// 需求: 声明一个三位数，按逆序打印出各位数字。例如原数字为312，应输出213。



//分析 分出 这三个数  分别g，s，b， 变量表达再  逆顺序 排列



var x=521;

var g=x%10;

var s=parseInt(x%100/10);
var b = parseInt(x/100);

console.log(g + '' + s + ''+ b)