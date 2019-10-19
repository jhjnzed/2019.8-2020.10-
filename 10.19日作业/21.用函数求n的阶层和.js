// 21.写一个函数，实现n的阶层的和求1+2!+3!+...+n!的和



function add(n) {
    var b = 0

    for (var i = 1; i <= n; i++) {

        var a = 1

        for (var j = 1; j < i; j++) {

            a += a * j
        }
        b += a
    }
    return b
}

console.log(add(5))