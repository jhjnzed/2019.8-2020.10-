// 3. 假设某人有100,000现金。每经过一次路口需要进行一次交费。
// 交费规则为当他现金大于50,000时每次需要交5%如果现金小于等于50,000时每次交5,000。
// 请写一程序计算此人可以经过多少次这个路口



// let monny = 100000;
// let sum = 0;

// for (let i = 0; i <= 100000; i++) {
//   if (monny > 50000) {
//     monny -= monny * 0.05;
//     sum++;
//   } else if (monny <= 50000) {
//     monny -= 50000;
//     sum++;
//   }
// }
// console.log(sum)



var num = 0
var money = 100000
while (money >= 5000) {
  if (money > 50000) {
    money -= money * 0.05
    num++
  } else if (money <= 50000) {
    money -= 5000
    num++
  }
}
console.log(num);