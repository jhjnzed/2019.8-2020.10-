// 需求: for循环嵌套打印一个直角三角形,如果所示(拔高题)
// *
// **
// ***
// ****
// *****


var str = "";
for (i=1; i <= 5; i++) {
    str += "*";
}
console.log(str);// 打印 5*




for(k =1;k<=5;k++){   //因为 要打5行所以 嵌套5次
   var str='';
    for ( i = 0; i < k; i++) {
       str +='*';
    } 
    console.log(str)
}

