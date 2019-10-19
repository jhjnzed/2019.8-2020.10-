// 16.写一个函数, 实现字符串反转,输入：["h","e","l","l","o"],输出：["o","l","l","e","h"];
// function a(arr){
//     for (var i = 0; i < arr.length/2; i++){
//           var temp = arr[i];
//           arr[i] = arr[arr.length-1-i];
//           arr[arr.length-1-i] = temp;
//     }
//     return arr
// }
// var result = a(["h","e","l","l","o"]);
// console.log(result);


function a(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    } return arr
}
var arr = ["h", "e", "l", "l", "o"]
console.log(a(arr))