// 2.下列代码控制台打印出的值是多少？写出执行过程
function fn() {
    alert("我们是全局的fn");
}
function fn2() {
    alert(fn);  // ？     [Function: fn]    找上面 的fn 所以 直接输出 函数 [Function: fn]
    fn = 3;
    return;
    function fn() {
        alert("我是fn2里面的");
    }
}
fn2();  