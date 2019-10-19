// 13.写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]
// function a(arr){
//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max
// }
// var arr = [18, 45, 0, 58, 32, 59];
// console.log(a(arr));

function a() {
    var arr = [18, 45, 0, 58, 32, 59];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    } return max

}

console.log(a())