//   jsom是符合js对象或数组格式的字符串

// js语法


// let obj = '{  "name"  : "hanhan" ,"age" :16    }'

// // console.log(obj)


// // json对象转js
// // Json.parse()json转js



// console.log(JSON.parse(obj));











// // Json数组  转js
// let arrjson = '["铲屎官","憨憨","憨狗","大G"]';

// // console.log(JSON.parse(arrjson));  (1)
// let x = JSON.parse(arrjson);

// console.log(Array.isArray(x))

// console.log(Array.isArray(arrjson));  //判断是否是数组








//互相转换     对象 数组 转  json   stringfy（对象或数组）



// let arrjson = ['帅', '酷', '靓', '美', '可爱', '御姐', '酥', '美少', '萝莉', '小奶狗', '小狼狗'];

// console.log(JSON.stringify(arrjson));


// let objson = {
//     my: {
//         attribute: '帅, 酷, 靓,  酥, 小奶狗 ,小狼狗'

//     },
//     mygirl: {
//         Anyappearance: '靓，美，可爱，御姐，甜，美少，萝莉'
//     }

// }

// console.log(JSON.stringify(objson))