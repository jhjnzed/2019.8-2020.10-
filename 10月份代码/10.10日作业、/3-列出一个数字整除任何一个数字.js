// 3.  用户输入一个数字，列出所有它能够整除的数字（while实现）


var i = 1
var num = 1234
while (i <= num) {
  if (num % i == 0) {
    console.log(`${num}能够整除${i}`);
  }
  i++
}