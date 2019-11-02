// 14.写一个函数,去掉数组中重复的元素，var arr = [1,5,4,4,7,6,6]
// function a() {
//     var arr = [1, 5, 4, 4, 7, 6, 6];
//     var arr1 = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr1.indexOf(arr[i]) == -1) {
//             arr1[arr1.length] = arr[i]
//         }
//     }
//     console.log(arr1);
// }
// a();



// function a() {
//     var arr = [1, 5, 4, 4, 7, 6, 6];
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 arr.splice(j, 1);
//                 j--
//             }
//         }
//     } console.log(arr)
// }
// a()



function a() {
    var arr = [1, 5, 4, 4, 7, 6, 6]
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    } console.log(arr)


}
a()