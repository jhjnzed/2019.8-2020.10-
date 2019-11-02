// 1.下列代码控制台打印出的值是多少?写出执行过程


function b(x, y, a) {
    a = 10
    alert(arguments[2]);//   10   a被重新赋值为10
}

b(1, 2, 3); 