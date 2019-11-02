// 1. 输出下列代码a的值分别是多少？并且把预解析的过程写出来
var a = 25;
function abc() {
    alert(a);   // ?从上往下  abc（）回到函数中  因为 var a = 10是局部变量   所以undefined
    var a = 10;
}
abc();
alert(a)  //?   25  直接 找到上面var