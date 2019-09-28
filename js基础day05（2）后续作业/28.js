// 28.鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只


var tou = 35;
var jiao = 94;
for (var i = 1; i < tou; i++) {
    if (i * 2 + (tou - i) * 4 == jiao) {
        console.log("鸡有" + i + "只")
        console.log("兔有" + (tou - i) + "只")
    }
}