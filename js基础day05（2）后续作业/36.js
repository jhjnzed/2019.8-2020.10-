// 36.求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.



var a = 0
for(var x= 1 ; x<=100 ; x++)
{
    if(x %3 ==0 &&x %5 ==0)
{  
    a+=x
  }
}
console.log(a)