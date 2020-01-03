// 54. 找出一个数的所有因子数


var x = 10;
for (var i = 1; i <= x; i++) {
    if (x % i == 0) {
        console.log(i);
    }
}
