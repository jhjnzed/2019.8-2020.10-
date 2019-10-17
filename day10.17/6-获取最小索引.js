var arr = [1, 2, 4, 5, 10, 100, 2, -22];
var min = arr[0];
var num = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];

        num = i;
    }
}

console.log(num);