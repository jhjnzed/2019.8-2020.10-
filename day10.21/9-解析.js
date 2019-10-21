// 9.下列代码控制台打印出的值是多少？把执行过程写出来
function a() {
    console.log('a');
    c();
}
function b() {
    console.log('b');
    a();
}
function c() {
    console.log('c');
}
a(); // ？    a  回到函数a() 输出a  再 调用c     输出 c
b();  // ？    到函数b（）  直接输出b  再调用 a  输出 a  再 c  所以 是    bac
c();   // ？    到函数c()  直接 输出c