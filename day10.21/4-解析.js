// 4.下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
var color = "red";   // 全局变量
function outer() {
    var anotherColor = "blue";
    function inner() {
        // red                       局部
        var tmpColor = color;
        // blue
        color = anotherColor;
        // red
        anotherColor = tmpColor;
        console.log(anotherColor);     // ? red
    }
    inner();
}
outer();
console.log(color);  // ?  blue