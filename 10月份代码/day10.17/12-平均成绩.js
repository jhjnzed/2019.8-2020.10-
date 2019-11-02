var arr = [[89, 66, 54], [77, 93, 68], [55, 45, 88], [71, 76, 75]];

var sum = 0;
var avg = 0;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        count++;
        sum += arr[i][j];
    }
}

console.log("和是" + sum + ",数组的长度" + count + ",成绩平均是" + sum / count);