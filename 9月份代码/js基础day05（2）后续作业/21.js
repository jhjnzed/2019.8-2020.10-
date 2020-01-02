// 21.	录入月份，输出对应的季节
//     (1)键盘录入一个整数(代表月份,范围1-12)
//     (2)输出该月份对应的季节
//    	   3,4,5春季
//    	   6,7,8夏季
//    	   9,10,11秋季
//    	   12,1,2冬季
//     (3)演示格式如下:
//    	   请输入一个月份:3
//    	   控制台输出:3月份是春季"


var season = 3

if (season   == 3 || season  == 4 || season  == 5) {
    console.log("春季")

}

else if (season  == 6 || season == 7 ||season == 8) {
    console.log("夏季")

}




else if (season  == 9 || season == 10 ||season == 11) {
    console.log("秋季")
    
}


else if (season  == 12 || season == 1 ||season == 2) {
    console.log("冬季")

}
