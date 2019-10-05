
// 48.控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和




var num1=1; 
var num2=0; 
for(var i=1;i<=20;i++) {
for(var j=1;j<=i;j++) {
num1=num1*j;
}
num2=(1/num1)+num2;
}
console.log(num2);
