// 11.利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//      55555
//      4444
//      333
//      22
//      1
//      22
//      333
//      4444
//      55555

for (var i = 5; i > 0; i--) {
        var str = "";
        for (var j = 0; j < i; j++) {
          str += i;
        }
        console.log(str);
      }
      for (var k = 2; k < 5 + 1; k++) {
        var str2 = "";
        for (var l = 0; l < k; l++) {
          str2 += k;
        }
        console.log(str2);
      }