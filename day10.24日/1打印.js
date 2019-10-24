// 1.下列代码控制台打印出的值分别是多少？
function f1() {
    var user = '二狗子';
    console.log(this.user);  // ？ undefined   this.user=user
    console.log(this);   // ？  window
}

f1();