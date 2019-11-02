// 将数组 ['top', 'right', 'bottom', 'left', 'center'] 的内容反过来存放
//① 声明一个变量存储数组
var arr=['top', 'right', 'bottom', 'left', 'center'];
//② 声明一个空变量

var brr=[];
var a=0;
for(var i=arr.length-1;i>=0;i--)//③ 倒着遍历数组，从最后一个数组开始，倒着一个一个添加到空数组中

{
    
    brr[a]=arr[i];
    a++
}
console.log(brr)//④ 打印结果
