// 4. 请编写程序，要求输入身高，体重后，输出体质指数
//     测量一个人的体质指数，体质指数（BMI）=体重（kg）÷身高^2（m），
//     成人的BMI数值：
//     过轻：低于18.5
//     正常：[18.5,23.9]
//     过重：[24,27]
//     肥胖：[28,32]
//     非常肥胖, 高于32 


let m = 176;
let kg = 64;
let BMI = kg / (m * m)


if (BMI > 32) {
  console.log('体制非常肥胖');
}
else if (28 < BMI && BMI < 32) {
  console.log('体制肥胖');
}
else if (24 < BMI && BMI < 27) {
  console.log('体制过重');
}
else if (18.5 < BMI && BMI < 23.9) {
  console.log('体制正常');
}
else if (BMI < 18.5) {
  console.log('体制过轻');
} else {
  console.log('非人类')
}