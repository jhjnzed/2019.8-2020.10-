// 7.下列代码控制台打印出的值是多少？写出执行过程
function test() {
    var x = 31;
    if (true) {
        var x = 71;
        console.log(x) // ?
    }
    console.log(x) // ?
}
test()


function test() {
    var x = 31;

    var x = 71;
    if (true) {

        console.log(x) // ? 71
    }
    console.log(x) // ?  71
}
test()