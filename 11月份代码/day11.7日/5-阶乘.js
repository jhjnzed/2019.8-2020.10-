// 5.求1!+2!+3!+...+20!的和
let a = 0;

let jie = 1;
for (let i = 1; i <= 20; i++) {
  jie *= i;
  a += jie
}
console.log(a)