// 7.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
function a(b) {
    console.log(b);  //?    因为被赋值为 c  （）  所以 是  [Function: c]
    var s = b();
    console.log(s)  // ?   123   b的调用是c  所以 停止返回123
}
a(c);    // 把 c（） 赋值到形参
function c() { return 123 }  