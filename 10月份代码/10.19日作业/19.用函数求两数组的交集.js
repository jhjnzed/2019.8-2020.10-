// 19.给定两个数组，编写一个函数来计算它们的交集(共有元素)。
// function a(arr1, arr2) {
//     var arr3 = [];
//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j] && arr3.indexOf(arr2[j]) == -1) {
//                 arr3[arr3.length] = arr2[j];
//             }
//         }
//     }
//     return arr3
// }
// var result = a([1, 3, 4, 5, 3, 6, 4], [1, 2, 3, 4]);
// console.log(result);



function a(arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j] && arr3.indexOf(arr1[i]) == -1) {
                arr3[arr3.length] = arr2[j];
            }
        }
    } return arr3
}

console.log(a([1, 2, 3], [1, 3, 4]))