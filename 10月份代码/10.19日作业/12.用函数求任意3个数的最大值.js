// 12.写一个函数, 用户输入任意3个数的大小，返回最大值
// function a(num1,num2,num3){
//     if (num1 > num2 && num1 > num3){
//         var max = num1;
//     }
//     else if (num2 > num1 && num2 > num3){
//         max = num2;
//     }
//     else if (num3 > num2 && num3 > num1){
//         max = num3;
//     }
//     return max
// }
// console.log(a(45,6,23));


function a(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        var max = n1;
    } else if (n2 > n1 && n2 > n3) {
        max = n2;

    } else if (n3 > n1 && n3 > n2) {
        max = n3;
    } return max;
}
console.log(a(1, 3, 5))