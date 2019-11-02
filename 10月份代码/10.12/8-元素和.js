// 2. 定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和



var arr=[11,22,33,44,55];//   定义 一个数组

var sum=0;    //  累加 量
for(var i=0;i<arr.length;i++)
{
    sum+=arr[i];
}
console.log(sum);