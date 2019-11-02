// 需求:把1 - 100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1 - 10的和为一组，输出来，11 - 20的和为一组输出来，依次类推

//分析 累加变量  循环嵌套
var sum = 0
for( i=1;i<=10;i++){
 sum+=i   
}console.log(sum)   


var sum = 0
for( i=11;i<=20;i++){
 sum+=i   
}console.log(sum)   


var sum = 0
for( i=21;i<=30;i++){
 sum+=i   
}console.log(sum)   



var sum = 0
for( i=31;i<=40;i++){
 sum+=i   
}console.log(sum)   


var sum = 0
for( i=41;i<=50;i++){
 sum+=i   
}console.log(sum)   


var sum = 0
for( i=51;i<=60;i++){
 sum+=i   
}console.log(sum)   



var sum = 0
for( i=91;i<=100;i++){
 sum+=i   
}console.log(sum)   



// 一共 循环到10次        // k: 1 2  3  4  5  6  7  8  9  10
                       // i: 1 11 21 31 41 51 61 71 81  91  (k-1)*10+1  
                        // 10 20 30 40 50 60 70 80 90 100    10*k

for (var k=1;k<=10;k++) {
  
    var sum =0;
    for (var i=(k - 1) * 10 + 1; i <= 10 * k; i++) {
        sum +=i;
    }
    console.log(sum);
}
