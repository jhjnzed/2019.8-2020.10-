// 15.写一个函数，求100 - 200 之间所有数的和
// function a(n,m){
//     var sum = 0;
//     for (var i = n; i <= m; i++){
//           sum += i
//     }
//     return sum
// }
// console.log(a(100,200));

function a(n, m) {
    var sum = 0
    for (var i = n; i <= m; i++) {
        sum += i;
    } return sum;
}
console.log(a(2, 4))