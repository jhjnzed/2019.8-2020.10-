// // 1.利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。

for (var i = 100; i < 1000; i++) {
    var ge = i % 10
    var shi = (i - ge) / 10 % 10
    var bai = (i - ge - shi * 10) / 100
    if (ge*ge*ge+shi*shi*shi+bai*bai*bai == i) {
        console.log(i);
    }
}


