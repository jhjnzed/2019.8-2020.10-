// function x(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             for (var k = j + 1; k < arr.length; k++) {
//                 if ((arr[i] + arr[j] + arr[k]) % 10 == 0) {
//                     console.log(arr[i], arr[j], arr[k] + '是10的倍数')
//                 }
//             }
//         }
//     }
// }



// var arr0 = [10, 2, 8, 4, 6]

// x(arr0)










let str = "https://www.test.com/login?name=zs&pwd=123";


let arrstr = str.split('?')[1];
// console.log(arr)

let arr = arrstr.split('&');
let obj = {};
for (var i = 0; i < arr.length; i++) {
    let key = arr[i].split('=')[0];
    let value = arr[i].split('=')[1];

    obj[key] = value;
}


console.log(obj);