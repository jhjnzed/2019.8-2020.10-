// 10. 获取当前时间，判断今年是否为闰年。两种方法判断 
//     1)判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除
//     2)判断本年2月是否为28天。闰年：2月有29天  平年：2月有28天


let year = 2019;
if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log('是闰年')
} else {
    console.log('不是闰年')
}


















function getDay(year, mth, day) {


    let PingNian = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let RunNian = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let sum = 0;

    if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {

        for (let i = 0; i < mth - 1; i++) {
            sum = sum + RunNian[i];

        }
        return sum + day;
    } else {

        for (let i = 0; i < mth - 1; i++) {

            sum = sum + PingNian[i];

        }
        return sum + day;
    }
}

console.log(getDay(2019, 4, 1));
