// 8. 写一个函数,  100到200有多少3 ，解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出到200之间的整数一共有多少个3。


function c() {
    var count = 0;

    for (var i = 100; i <= 200; i++) {
        var gw = i % 10;
        var sw = parseInt(i / 10 % 10)

        if (gw == 3) {
            count++
        }
        if (sw == 3) {
            count++
        }

    }
    return count;

}

console.log(c());