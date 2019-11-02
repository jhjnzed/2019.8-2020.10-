
//3.写一个函数，将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5

function f1(num) {
    //   创建字符串
    var str = num + "=";
    var i = 2;
    while (i <= num) {
        if (num % i == 0) {
            str += i
            if (num != i) {
                str += '*'
            }
            num /= i;
        } else {
            i++;
        }
    }
    return (str)
}

console.log(f1(90));