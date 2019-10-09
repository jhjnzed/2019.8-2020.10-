// 需求: 利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成） （拔高题）
//  ---*
//  --***
//  -*****
//  *******
//  -*****
//  --***
//  ---*


// 分 三部  上中下   中间 直接 输出

// 上
var str = "";
for (  i = 0; i < 3; i++) {
    str += "-"
}
for ( j = 0; j < 1; j++) {
    str += "*"
}
console.log(str);

var str = "";
for ( i = 0; i < 2; i++) {
    str += "-"
}
for ( j = 0; j < 3; j++) {
    str += "*"
}
console.log(str);

var str = "";
for (i = 0; i < 1; i++) {
    str += "-"
}
for ( j = 0; j < 5; j++) {
    str += "*"
}
console.log(str);

// 中
console.log('*******')


// 下
var str = "";
for ( i = 0; i < 1; i++) {   
    str += "-"
}
for ( j = 0; j < 5; j++) {
    str += "*"
}
console.log(str);

var str = "";
for ( i = 0; i < 2; i++) {
    str += "-"
}
for ( j = 0; j < 3; j++) {
    str += "*"
}
console.log(str);

var str = "";
for ( i = 0; i < 3; i++) {
    str += "-"
}
for ( j = 0; j < 1; j++) {
    str += "*"
}
console.log(str);



//一共分别循环3次
//上
for ( s = 0; s < 3; s++) {    
    var str = "";
   
    for ( i = 0; i < 3 - s; i++) {    // i: 3 2 1  3-s
        str += "-"
    }
   
    for ( j = 0; j < 2 * s + 1; j++) {   // j: 1 3 5  2*s+1
        str += "*"
    }
    console.log(str);
}
// 中
console.log("*******")
// 下
for ( s = 0; s < 3; s++) {
    var str = "";

    for ( i = 0; i <= s; i++) {    // i: 1 2 3  
        str += "-"
    }
               
    for ( j = 0; j <= -(2 * s + 1) + 5; j++) {    // j: 5 3 1   -(2*s+1)+5
        str += "*"
    }
    console.log(str);
}

