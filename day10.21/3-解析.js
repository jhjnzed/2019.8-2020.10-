// 3. 输出下列代码name3的值分别是多少？并且把预解析的过程写出来
var name3 = "zs";
function f3() {
    var name3 = "ls";    // 局部变量
    function f4() {
        name3 = "ww";
    }
    f4();
    console.log(name3);   // ?   ww 因为  var name3 = "ls" 被赋值为ww
}
f3();
console.log(name3); // ?  zs   直接找到最上面的全局变量
