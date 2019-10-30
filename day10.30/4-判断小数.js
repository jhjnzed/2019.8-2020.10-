// 4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 



let a = 3.14;

if (a != parseInt(a)) {
    console.log('是小数');
} else {
    console.log('是整数')
}