
// 52. 求出100-1000中，各个数字之和是12,这样的三位数有多少个，在控制台打印出来


var x = 0
for (var i = 100; i <= 1000; i++) {
    var num1 = i % 10;
    var num2 = parseInt(i / 10 % 10)
    var num3 = parseInt(i / 100 % 10)
    x=num1+num2+num3;
    if(x==12){
        console.log(i);
    }
}
