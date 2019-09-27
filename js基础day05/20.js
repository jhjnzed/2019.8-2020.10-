// 20.	请编写程序，要求输入身高，体重后，输出体质指数
//     测量一个人的体质指数，体质指数（BMI）=体重（kg）÷身高^2（m），
//     成人的BMI数值：
//     过轻：低于18.5
//     正常：[18.5,23.9]
//     过重：[24,27]
//     肥胖：[28,32]
//     非常肥胖, 高于32

var BMI = 26
if (BMI < 18.5) {
    console.log("过轻")

}

else if(BMI >= 18.5 && BMI <23.9) {
    console.log("正常")

}

else if(BMI >= 24 && BMI <27) {
    console.log("过重")

}

else if(BMI >= 18.5 && BMI <23.9) {
    console.log("肥胖")

}

else {
    console.log("过于肥胖")

}
