// 1. 100以内7的倍数的总和
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    sum += i;
  }
}
console.log(sum)