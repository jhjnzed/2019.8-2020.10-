// 6. 利用JavaScript完成如下功能：判断如果a>60，则b=1；如果a>70，则b=2；如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值



let a = 51;

let b;
if (a > 90) {
    b = 4;
}
else if (a > 80 && a <= 90) {
    b = 3;
}
else if (a > 70 && a <= 80) {
    b = 2;
}
else if (a > 60 && a <= 70) {
    b = 1;
}
else {
    console.log('只能输入1--5')
}


console.log(b)