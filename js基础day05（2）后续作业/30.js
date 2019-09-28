// 30.输出2-200之间的所有素数（素数就是只能被1和其本身整除的数）



for (var i = 2; i < 200; i++) {
    var b = false;
    for (var k = 2; k < i; k++) {
        if (i % k == 0) {
            b = true;
        }
    }
    if (!b) {
        console.log(i);
    }
}