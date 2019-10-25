// function getDays(year, month, day) {
//     let days = day;
//     if (month < 2) {
//         return days;
//     }
//     let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     for (let i = 0; i < month - 1; i++) {
//         days += months[i];
//     }
//     if ((year % 4 === 0 && year % 100 != 0 || year % 400 === 0) && month > 2) {
//         days++;
//     }
//     return days;
// }
// console.log(getDays(2019, 3, 1));





// // 调用函数

// console.log(getDay(2019, 4, 1));


// function getDay(year, mth, day) {

//     // 创建两个数组，分别是平年和闰年 

//     let PingNian = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let RunNian = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     // 创建一个变量来累加和
//     let sum = 0;

//     // 判断是否是闰年
//     if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {

//         // 计算天数
//         for (let i = 0; i < mth - 1; i++) {

//             // 累加当前月份之前的天数
//             sum = sum + RunNian[i];

//         }
//         return sum + day;
//     } else {

//         for (let i = 0; i < mth - 1; i++) {

//             sum = sum + PingNian[i];

//         }
//         return sum + day;
//     }
// }


// function getDay(year, mth, day) {
//     let pingnian = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let runnian = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let sum = 0;
//     //判断

//     if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
//         //是 闰年就  +
//         for (let i = 0; i < mth - 1; i++) {
//             sum += runnian[i];

//         }
//         return sum + day;
//     } else {
//         sum += pingnian[i];
//     }
//     return sum + day;



// }
// console.log(getDays(2016, 3, 1))











// function mday(year, mth, day) {
//     let pingnnian = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let runnian = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let sum = 0 // 累加量

//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         for (let i = 0; i < mth - 1; i++) {
//             sum += runnian[i];
//         }
//         return sum + day;
//     } else {
//         sum += pingnnian[i];
//     }
//     return sum + day;




// }
// console.log(mday(2020, 3, 1))


// 判断是否为素数

// function susu(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(susu(9))

// function sshu(x) {
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(sshu(7))

// function sushu(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return '不是素数';
//         }
//     }
//     return '是素数';
// }
// console.log(sushu(7))


