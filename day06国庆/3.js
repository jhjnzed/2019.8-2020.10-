// 43.用for循环求2+22+222+2222+22222的和



var sum = 0
for (var i = 1; i <= 22222; i++) {
    var num1 = i % 10;
    var num2 = parseInt(i / 10 % 10)
    var num3 = parseInt(i / 100 % 10)
    var num4 = parseInt(i / 1000 % 10)
    var num5 = parseInt(i / 10000)
    if (i < 10) {
        if (num1 == 2) {
            sum += i
        }
    }

    if (i < 100) {
        if (num1 == 2 && num2 == 2) {
            sum += i
        }
    }
    if (i < 1000) {
        if (num1 == 2 && num2 == 2 && num3 == 2) {
            sum += i
        }
    }
    if (i < 10000) {
        if (num1 == 2 && num2 == 2 && num3 == 2 && num4 == 2) {
            sum += i
        }
    }
    if (i < 100000) {
        if (num1 == 2 && num2 == 2 && num3 == 2 && num4 == 2 && num5 == 2) {
            sum += i
        }
    }
}
console.log(sum);