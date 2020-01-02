// 5.打印九九乘法表


for (let i = 1; i <= 9; i++) {
  let sum = '';
  for (let j = 1; j <= i; j++) {

    sum += j + 'x' + i + '=' + i * j + '    '
  }
  console.log(sum)
}

