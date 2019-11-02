// 3. 给一个数字赋值给一个变量num1，求出是奇数 还是 偶数




function x(num1) {
    for (let i = 1; i <= num1; i++) {
        if (num1 % i != 0) {
            console.log('是奇数');

        } else {
            console.log('是偶数');

        }

    }
    return num1;
}

x(5)