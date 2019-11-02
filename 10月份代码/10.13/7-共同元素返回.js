// 17. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组



var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];

var x = [];
// 使用循环将旧数组push到新数组
for(var i = 0; i < arr1.length; i++){

    x.push(arr1[i]);
}

for(var j = 0; j < arr2.length; j++){

    x.push(arr2[j]);
}
console.log(x)