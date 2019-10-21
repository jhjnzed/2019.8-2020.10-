// 2.输出下列代码a的值分别是多少？并且把预解析的过程写出来
var a = 25;
function abc() {
    alert(a);   // ?  找到全局变量  var a = 25;  所以 25
    a = 10;
}
abc();
alert(a)  //？      因为 赋值 a=10   所以 为10
