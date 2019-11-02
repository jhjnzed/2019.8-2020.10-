// 18.给定一个整数，写一个函数来判断它是否是 3 的幂次方
// function judge(num){
//     var j = 1;
//     var flag = false
//     for (var i = 0; i < num; i++){
//         j *= 3
//         if (j == num){
//              flag = true;
//              break;
//         }
//         if (j > num){
//             flag = false;
//             break;
//         }
//     }
//     return flag
// }
// console.log(judge(81));



// function mi(n) {
//     while (n % 3 == 0) {
//         n /= 3;
//     } if (n == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(mi(28))


function mi(n) {
    while (n % 3 == 0) {
        n /= 3
    } if (n == 1) {
        var flag = true;
    } else {
        flag = false;
    } return flag
}
console.log(mi(2))