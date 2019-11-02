// function y(x) {
//     var arr = [5, 7, 8, 55, 2, 8, 0, 3, 1, 15, 6]
//     for (var i = 0; i < arr.lenght; i++) {
//         if ((arr[i] + arr[i + 1] + arr[i + 2]) % 10 == 0) {
//             arr.push(x);
//         }
//     }
// }
// console.log(y())


// var arr1 = [];
// var arr = [5, 7, 8, 55, 2, 8, 0, 3, 1, 15, 6]
// for (var i = 0; i < arr.lenght; i++) {
//     if ((arr[i] + arr[i + 1] + arr[i + 2]) % 10 == 0) {
//         arr1.slice(arr)
//     }
// }

// console.log(arr1)


// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr1.push(arr.slice(1, 3))
//     }
// }
// console.log(arr1)




// function x(arr){
//     var arr = [5, 7, 8, 55, 2, 8, 0, 3, 1, 15, 6];
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%10==0){

//         }
//     }


// }
// var arr1 = [];
// var arr = [5, 7, 8, 55, 2, 8, 0, 3, 1, 15, 6];
// for (var i = 0; i < arr.length; i++) {
//     if ((arr[i] + arr[1 + i] + arr[i + 2]) % 10 == 0) {
//         var x = arr.splice(i, 1)
//         arr1.push(x)
//     }
// }
// console.log(arr1)




var arr1 = [];
var arr = [5, 7, 8, 55, 2, 8, 0, 3, 1, 15, 6];



for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        for (var k = j + 1; k < arr.length; k++) {
            if ((arr[i] + arr[k] + arr[j]) % 10 == 0) {
                arr1.push(arr)
            }
        }
    }
}
console.log(arr1)