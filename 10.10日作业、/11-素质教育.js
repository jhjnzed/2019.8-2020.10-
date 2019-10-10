// 12.素质教育（把分数变成ABCDE),A是>=90的分数，B是80-90的分数，以此类推，千万不要写100个case哟,分数需要接收用户输入的



var y = 66
//定义一个易于后面判断成绩的变量
var x = parseInt(y / 10)
switch (x) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log('E');
    break;
}