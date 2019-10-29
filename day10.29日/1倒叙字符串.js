// 1.将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"



var str = "abcdefgh";
var newstr = '';

for (let i = 0; i < str.length; i++) {
    newstr += str[str.length - i - 1]
}
console.log(newstr)

