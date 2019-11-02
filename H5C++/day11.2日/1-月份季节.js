// 1.录入月份，输出对应的季节
//     (1)键盘录入一个整数(代表月份,范围1-12)
//     (2)输出该月份对应的季节
//    	   3,4,5春季
//    	   6,7,8夏季
//    	   9,10,11秋季
//    	   12,1,2冬季
//     (3)演示格式如下:
//    	   请输入一个月份:3
//    	   控制台输出:3月份是春季"



let mth = 5;

if (mth == 3 || mth == 4 || mth == 5) {
  console.log(`春季`)
}
else if (mth == 6 || mth == 7 || mth == 8) {
  console.log(`夏季`)
}
else if (mth == 9 || mth == 10 || mth == 11) {
  console.log(`秋季`)
}
else if (mth == 12 || mth == 1 || mth == 2) {
  console.log(`冬季`)
}