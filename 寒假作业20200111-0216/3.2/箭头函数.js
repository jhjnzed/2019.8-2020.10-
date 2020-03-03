
// 函数表达式的方式创建函数
var f = function (v) {
  return v;
};
// // 函数声明的方式
// function f(v){
//   return v;
// }

// 箭头函数
var f = v => v;
// 也可以这么写
var f = v => { return v }



// var sum = function(num1, num2) {
//   return num1 + num2;
// };
// 箭头函数
// var sum = (num1,num2)=>num1 + num2;


var getSum = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

console.log(getSum([1, 2, 3, 4, 5]))


// 改写箭头函数
var getSum = arr => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}
console.log(getSum([1, 2, 3, 4, 5]))


// new getSum()  X