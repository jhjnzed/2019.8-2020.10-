
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var newarr = [];
for (var i = 0; i < arr.length; i + 6) {
    newarr.push(arr.splice(0, 6));
}
console.log(newarr);