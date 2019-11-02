
// 4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 


var a = 3.12
var b = parseInt(a)

if (a>b) {
   console.log(a+"是小数");
}else{
   console.log(a+"是整数");

}