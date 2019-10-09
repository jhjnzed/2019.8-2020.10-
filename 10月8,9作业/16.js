// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//     *********
//    *******
//   *****
//  ***      
// *  


//分析  分为 两部分  循环 由空格 和 *组成 



var str = "";
for ( i = 0; i < 5; i++) {
    str += " ";
}

for ( j = 0; j < 9; j++) {
    str += "*";
}
console.log(str);


var str = "";
for ( i = 0; i < 4; i++) {
    str += " ";
}

for ( j = 0; j < 7; j++) {
    str += "*";
}
console.log(str);
 
//  循环5次        
//          i        5 4 3 2 1   5-x
//          j        9 7 5 3 1     -(2x+1)+9

for ( k = 0; k < 5; k++) {
    var str = "";
  
    for ( i = 0; i < 5 - k; i++) {
        str += " ";
    }
  
    for ( j = 0; j <= -(2 * k + 1) + 9; j++) {
        str += "*";
    }
    console.log(str);
}