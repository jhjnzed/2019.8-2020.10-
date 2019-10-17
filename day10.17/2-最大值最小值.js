



var arr = [10, 5, 34, 59, 98];
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

var arr = [10, 5, 34, 59, 98];
var min = arr[0];
var i = 0;
while (i < arr.length) {
    if (arr[i] < min) {
        min = arr[i];
    }

    i++;
}
console.log(min);