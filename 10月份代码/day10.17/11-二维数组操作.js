
var arr = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
var sum = 0;
var max = arr[0][0];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > max) {
            max = arr[i][j];
        }
        console.log(arr[i][j])
        sum += arr[i][j];
    }
}
console.log(sum, max);
