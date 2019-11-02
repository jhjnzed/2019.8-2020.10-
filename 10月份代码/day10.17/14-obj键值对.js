
var obj = {};

var arr = [0, 1, 3, 1, 1, 5, 5, 8, 8, 8, 0, 9, 5]
for (var i = 0; i < arr.length; i++) {


    if (obj[arr[i]]) {

        obj[arr[i]]++;
    } else {
        obj[arr[i]] = 1;
    }

} console.log(obj)