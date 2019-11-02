// 1、输出2-100之间的所有素数（素数就是只能被1和其本身整除的数）

for (var i = 2; i <= 100; i++) {
    var a = true;
    for (var j = 2; j < i; j++)  {
        if (i % j == 0) {
            a = false;
            break;
        } else{
            a=true;
        }

    }if (a == true) {
        console.log(i);
    }
}
