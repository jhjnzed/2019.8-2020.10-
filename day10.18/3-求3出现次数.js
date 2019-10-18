// 3. 写一个函数，求出3在数组 var arr = {3,4,3,5,7,9};中出现的次数


function count(arr) {

    var c = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 3) {
            c++;
        }
    }
    return c;
}

var arr = [3, 4, 3, 5, 7, 9];
console.log(count(arr));