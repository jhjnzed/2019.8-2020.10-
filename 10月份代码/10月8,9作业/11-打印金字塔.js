// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）（拔高题）
//    * 
//   *  * 
//  *  *  * 
// *  *  *  * 
//*  *  *  *  *


// 分析:  分为2个部分  先 循环 空格  再 循环 * +空格     一共 循环了 5次 




var str = "";
for ( i = 0; i < 4; i++) {
    str += " ";
}

for ( j = 0; j < 1; j++) {
    str += "* ";
}
console.log(str);


var str = "";
for ( i = 0; i < 3; i++) {
    str += " ";
}

for ( j = 0; j < 2; j++) {
    str += "* ";
}
console.log(str);


var str = "";
for ( i = 0; i < 2; i++) {
    str += " ";
}

for ( j = 0; j < 3; j++) {
    str += "* ";
}
console.log(str);


var str = "";
for ( i = 0; i < 1; i++) {
    str += " ";
}

for ( j = 0; j < 4; j++) {
    str += "* ";
}
console.log(str);


var str = "";
for ( i = 0; i < 0; i++) {
    str += " ";
}

for ( j = 0; j < 5; j++ ) {
    str += "* ";
}
console.log(str);



for ( k = 0; k < 5; k++) {
    var str = "";
                                        //  k: 0 1 2 3 4
    for ( i = 0; i < 4 - k; i++) {      //  i: 4 3 2 1 0     4-k
        str += " ";
    }
                                        //  k: 0 1 2 3 4
    for ( j = 0; j <= k; j++) {         // j:  0 1 2 3 4    j<= k
        str += "* ";
    }
    console.log(str);
}

