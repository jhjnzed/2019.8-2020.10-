// 5.删除一个字符串中出现最多的字符, var str="assdfscfwssseee"


var str = "assdfscfwssseee"

let obj = {};
for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
        obj[str[i]]++;
    } else {
        obj[str[i]] = 1;
    }
}

// console.log(obj);

let max = -1;
for (let key in obj) {
    if (obj[key] > max) {
        max = obj[key];
    }
}
// console.log(max);

let value = '';
for (let key in obj) {
    if (obj[key] == max) {
        value = key;
    }
}
// console.log(value);


let subStr = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] != value) {
        subStr += str[i];
    }
}

console.log(subStr);