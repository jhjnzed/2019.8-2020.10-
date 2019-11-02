// 5.编写一个add函数，实现如下效果:
//  // console.log(add(1, 2)); // 3
// // console.log(add(1)(2)); // 3 

function add(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    }
    else {
        return function (y) {
            return x + y;
        }
    }
}
console.log(add(1, 2)); // 3
console.log(add(1)(2)); // 3