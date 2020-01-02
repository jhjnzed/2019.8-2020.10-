// 34.求任意一个数字的约数有哪些


var num=50;
var a=new Array();
for(var i=1;i<=num;i++)
{
    if(num%i==0)
    {
        a.push(i);
    }
}
console.log(a)