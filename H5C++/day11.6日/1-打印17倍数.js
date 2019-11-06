// 1. 打印1 - 100中前三个是17的整数倍的数。


let sum = 0;
for (let i = 1; i <= 100; i++) {

  let conut = 0;
  if (i % 17 == 0) {
    conut += 1;
  }
  if (conut == 1) {
    console.log(i)
    sum++
  }
  if (sum == 3) {
    break;
  }
}