// 1. 利用js求13的阶乘，并在控制台输出


// let sum = 0

// for (let i = 1; i <= 13; i++) {

//     let a = 1

//     for (let j = 1; j < i; j++) {

//         a += a * j
//     }
//     sum += a
// }

// console.log(sum);



let j = 1;
for (let i = 1; i <= 13; i++) {
    j *= i
}

console.log(j)