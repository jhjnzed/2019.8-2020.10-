// 10、利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成）

//上
for ( s = 0; s < 3; s++) {    
    var str = "";
   
    for ( i = 0; i < 3 - s; i++) {   
        str += "-"
    }
   
    for ( j = 0; j < 2 * s + 1; j++) { 
        str += "*"
    }
    console.log(str);
}
// 中
console.log("*******")
// 下
for ( s = 0; s < 3; s++) {
    var str = "";

    for ( i = 0; i <= s; i++) {  
        str += "-"
    }
               
    for ( j = 0; j <= -(2 * s + 1) + 5; j++) { 
        str += "*"
    }
    console.log(str);
}
