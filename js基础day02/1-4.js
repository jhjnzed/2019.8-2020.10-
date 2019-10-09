console.log('我是传智学院的一名学生，我为自己代言')

var a = '88'
console.log(a)

var number = 1;
var boolean = true;
var string = 'abc';
var undefined; // 能不
var nul = null; // 空对象 对象 //引用类型 object Array Symbol
var f = [];
var g = {};
console.log(typeof number, typeof boolean, typeof string, typeof undefined, typeof nul, typeof f, typeof g, typeof Symbol);

 
// 第一种
var num1 = 123;
var num2 = 456;
var num3;

num3 = num1;
num1 = num2;

num2 = num3;


console.log(num1, num2);


//第二种
var a = 123;
var b = 456;


a = [b,b=a][0];
























