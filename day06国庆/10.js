// // 50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？



var x=0;
for(var i=100;i<=500;i++){
    var num1 = i % 10;
    var num2 = parseInt(i / 10 % 10)
    var num3 = parseInt(i / 100 % 10)
    if (num1==4||num2==4||num3==4) {

    }else{
        x+=1

    }
}
console.log(x);

