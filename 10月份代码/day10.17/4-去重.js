
var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4];

var newArr = [];

for (var i = 0; i < arr.length; i++) {

    if (newArr.indexOf(arr[i]) === -1) {

        newArr.push(arr[i]);
    }

}

console.log(newArr);