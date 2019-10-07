
// 62.把1-100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1-10的和为一组，输出来，11-20的和为一组输出来，依次类推


var num1=0;
var num2=0;
var num3=0;
var num4=0;
var num5=0;
var num6=0;
var num7=0;
var num8=0;
var num9=0;
var x=0;
for (var i=1;i<=100;i++){
    if (i<=10) {
        num1+=i
    } else if (i<=20) {
        num2+=i
    }else if (i<=30) {
        num3+=i
    }else if (i<=40) {
        num4+=i
    }else if (i<=50) {
        num5+=i
    }else if (i<=60) {
        num6+=i
    }else if (i<=70) {
        num7+=i
    }else if (i<=80) {
        num8+=i
    }else if (i<=90) {
        num9+=i
    }else if (i<=100) {
        x+=i
    }
}
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num8);
console.log(num9);
console.log(x);
