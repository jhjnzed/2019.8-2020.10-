// 3、定义一个5位数,判断 该五位数是否为回文数。
// （判断第一位和第五位是否一样，第二位和第四位是否一样）


var x=12345;

var g=x%10;
var s=parseInt(x%100/10);
var b =parseInt(x%1000/100);
var q =parseInt(x%1000/1000);
var w=parseInt(x/10000);

if(g===w&&s===q){
    console.log('是回文数')
}else{
    console.log('不是回文数')
}