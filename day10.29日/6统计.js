// 6. var str="hello world 378nihao",分别统计出字符串中的英文字母、数字、空格的个数




var str = "hello world 378nihao"

var obj = {};

for (var i = 0; i < str.length; i++) {

    if (obj[str[i]]) {
        obj[str[i]]++;
    } else {
        obj[str[i]] = 1;
    }
}

console.log(obj);