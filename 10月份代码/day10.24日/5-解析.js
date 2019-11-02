// 5.下列代码控制台打印出的值分别是多少？
function f1() {  //a.user
    this.user = "二狗子";
}
var a = new f1();
alert(a.user);  // ?     二狗子