//2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)



function a(x) {
    //循环体
    let a = true;  // 定义开关判断
    for (var i = 2; i < x; i++) {
        if (num % i == 0) {
            a = false;
        }
    }
    return a;
}
//定义变量存储返回值
let result = a(1)
console.log(result);