// 12.某班考试成绩如下，利用二维数组存储这些数据，统计出全班的平均成绩
//   第一组： 89，66，54
//   第二组： 77，93，68
//   第三组： 55,   45,  88
//   第四组： 71,   76,  75


var score = [
    [89, 66, 54],
    [77, 93, 68],
    [55, 45, 88],
    [71, 76, 75]
]

var avg = 0; // 求平均值
var sum = 0; // 求和
var Length = 0; // 二维数组长度

for (var i = 0; i < score.length; i++) {

    for (var j = 0; j < score[i].length; j++) {

        sum = sum + score[i][j];
        
    }
    // 获取二维数组里面所有数组的长度
    Length = Length + score[i].length;
}
avg = sum / Length; // 计算平均值
console.log(avg);