var num1=123;
var num2=133;
var num3=111;

if (num1>num2&&num1>num3) {
    console.log(num1+"是最大值");
}else if (num2>num1&&num2>num3) {
    console.log(num2+"是最大值");
}else{
    console.log(num3+"是最大值");
}



if (num1<num2) {
    if (num1<num3) {
        console.log(num1+"是最小值");
    }else{
        console.log(num3+"是最小值");
    }
}else{
    if (num2<num3) {
        console.log(num2+"是最小值");
    }else{
        console.log(num3+"是最小值");
    }
}
