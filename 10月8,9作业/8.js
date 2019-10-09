// 需求: 利用JavaScript完成如下九九乘法表

// // 分析  1x1=1
//          1x2=2 2x2=4  用循环嵌套   外控行 内控 列

var str='';

for(i=1;i<=9;i++){
   
    str=str+1+'x'+i+'='+1*i+' '

}console.log(str)  //计算1乘到9


for(k=1;k<=9;k++){
    var str=''
    for(i=1;i<=k;i++){

    str=str+k+'x'+i+'='+k*i+' '
}
console.log(str)
}