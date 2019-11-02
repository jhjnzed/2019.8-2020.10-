
// 53. 输入一个数，判断这个数是否是素数；.


var x=100;
var y=true;
for (i = 2; i < x; i++) {
    if (x % i == 0) {
        y=false;
    }
}
if(y){
    console.log('这个数是素数');
}else{
    console.log('这个数不是素数');

}
