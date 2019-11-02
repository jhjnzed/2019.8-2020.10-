// 23.输入一个三位整数，判其是不是降序数如:531是降序数 百位>十位>个位



var x=531;

var g = x%10;

var s = parseInt(x/10) % 10  ;  

var b = parseInt( x / 100 ) ;
if(b>s&&s>g){
    console.log('是降数')
}else{
    console.log('不是降数')
}