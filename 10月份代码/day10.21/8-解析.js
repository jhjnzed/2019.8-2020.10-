// 8.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
var n = 0;
function a() {
    var n = 10;
    function b() {
        n++;
        console.log(n);
    }
    b();
    return b;
}
var c = a();   //?  11  因为  var n = 10;   n++;   所以 是11
c(); //?    再返回一次  所以12
console.log(n); // ?  找到 全局 var n = 0;  所以 为0