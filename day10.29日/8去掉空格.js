// 8. 去掉字符串两端和中间的空格，var str = '   ab  cd    ';



var str = '   ab  cd    ';




let x = str.substr(3, 2)
// console.log(x)
let y = str.substr(7, 2)
// console.log(y)

let z = x + y;


console.log(z)