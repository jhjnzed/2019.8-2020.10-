// 14. 求任意2个正数的最大公约数和最小公倍数


var num1 = 55
var num2 =25
var num
num1 > num2 ? num = num2 : num = num1
var i = 1
var max
var min
do {
  if (num1 % i == 0 && num2 % i == 0) {
    max = i
  }
  i++
} while (i <= num)
console.log(`${num1}和${num2}的最大公约数是${max}`);
min = num1 * num2 / max
console.log(`${num1}和${num2}的最小公倍数是${min}`);