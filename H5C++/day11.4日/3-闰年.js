// 3.求2000-3000年之间的所有的闰年以及个数

let sum = 0;

for (let i = 2000; i <= 3000; i++) {
  if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
    console.log(i);
    sum++;

  }
}

console.log(sum)