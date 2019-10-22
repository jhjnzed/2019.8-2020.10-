// 6.下列代码控制台打印出的值是多少？写出执行过程
function test() {
    let x = 31;
    if (true) {
        let x = 71;
        console.log(x) // ?
    }
    console.log(x) // ? 
}
test()



function test() {
    let x = 31;
    if (true) {
        let x = 71;
        console.log(x) // ?  71 直接找局部
    }
    console.log(x) // ?  31   找if外 局部
}
test()