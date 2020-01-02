
// 2.求整数1～100的累加值，但要求跳过所有个位为4的数


for (let i = 1; i <= 100; i++) {
  let g = parseInt(i % 10);
  if (g == 4) {
    continue;

  }
  console.log(i)
}