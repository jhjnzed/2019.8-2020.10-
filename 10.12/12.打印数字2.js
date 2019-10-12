// 6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。





var arr = [1,1,2,2,3,4,5,4,3,2,1];


var sum=0;//累计2出现的次数

//循环体

for(var i=0;i<arr.length;i++)
{
    if(arr[i]===2)   //  当 数组 中有 等于2 的就累加
    {
        sum++;
    }
}
console.log(sum);