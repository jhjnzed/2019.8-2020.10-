// 8、利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）



for ( k = 0; k < 5; k++) {
    var str = "";
                                       
    for ( i = 0; i < 4 - k; i++) {      
        str += " ";
    }
                                        
    for ( j = 0; j <= k; j++) {        
        str += "* ";
    }
    console.log(str);
}
