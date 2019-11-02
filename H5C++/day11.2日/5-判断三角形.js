// 5.输入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型


let a = 5;
let b = 2;
let c = 5;
if (a == b && b == c && a == c) {
  console.log('这是一个等边三角形');
}
else if (a == b || b == c || a == c) {
  console.log('这是一个等腰三角形');
}
else if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
  console.log('这是一个直角三角形');
}
else {
  console.log('这是不是三角形');
}