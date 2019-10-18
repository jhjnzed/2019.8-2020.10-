// 函数

//   实现 某一个功能代码，  放到一个特定的语法结构中。  当需要的时候调用。

//   关键字 function      

// 函数就是一段功能代码的 封装。 重复调用、

// 语法
// 声明函数
// // function 函数名（）{
//     函数体（曾经学到功能代码）



// }


// 打印helloword

// 声明一个函数  名字 是prinheelo
// function printhello() {

//     console.log('helloword')
// }

// printhello()


// function add() {
//     console.log(1 + 2);
// }

// add()



// 函数名必须遵守小驼峰命名法

//如果是多个单词 一个单词小写  以后 每个 单词 首字母都要大写

//  如果是一个单词就小写


//  需求 ；让用户输入两个数 求出最大值




//   步骤；


// var num1 = prompt(' 请输入第一个数')

// var num2 = prompt(' 请输入 第二个数')
// num1 > num2 ? alert(num1 + '是最大值') : alert(num2 + '是最大值')



// function getmax() {
//     var num1 = prompt(' 请输入第一个数')

//     var num2 = prompt(' 请输入 第二个数')
//     num1 > num2 ? alert(num1 + '是最大值') : alert(num2 + '是最大值')


// }

// getmax()






//  定义 函数
// function su() {
//     var sum = 0;
//     for (var i = 1; i <= 100; i++) {  // 放置代码块
//         sum += i

//     }
//     console.log(sum);


// }
// su()






// 形式参数；占位置的是形式参数 函数 定义 函数名后面的小括号是形参

//  实际参数 正在参与运算的值 函数调用 函数后面小括号是实际参数


// function sayhi(name) {

//     console.log('hi' + name)
// }
// sayhi('周可');

// sayhi('刘浩宇');



// function sayhi(name1, name2) {

//     console.log('hi' + name1 + ',' + name2)
// }
// sayhi('张三', '李四');



// function add(n1, n2) {
//     console.log(n1 + n2);
// }
// add(4, 6);


// add(99, 1)



// function su(n, m) {//形参 
//     var sum = 0;
//     for (var i = n; i <= m; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }
// su(12, 100)//  实参



// 分析 定义一个函数 参数是任意两个数 n, m   使用for 循环 求和


// 步骤 
// 1 声明函数  定义2个参数
// function getadd(n, m) {
//     var sum = 0;
//     for (var i = n; i <= m; i++) {

//         // 2 声明求和变量


//         // 3循环遍历

//         // 4 累加
//         sum += i;
//         // 5 打印（函数也是要有结果的 打印不是结果只是线束出来告诉你 结果）



//     }
//     // console.log(sum);
//     return sum;

// }

// // getadd(1, 100);
// var return = getadd(1,100)


//  需求 求出和后 +1 

// 函数的返回值就是整个函数的运算结果
// 如果想拿到结果就 return 结果


// 如果return了 谁 那么函数的返回值就是谁




// function a(){

//     var n1=1;
//     var n2=2;

//     return n1+n2


// }
// var return = a();
// console.log(return)



// function   函数名（参数）{

// }
// 没有参数有返回值的函数

// function 函数（）{
//     return 返回值
// }

// 有参数有返回值

// function 函数名（参数）{
//     return 返回值
// }





// function a() {
//     return 1;
// }
// var result = a();
// console.log(result)


// return 返回最后一个值





// 步骤 
// 1 声明一个函数  定义一个参数 类型是数组

// function maxvalue() {

//     // 1.1  在函数中声明 一个数组
//     var arr = [5, 23, 4, 6, 44, 88]
//     // 1.2  声明一个最大值
//     var max = arr[0];
//     // 1.3  循环遍历数组

//     for (var i = 0; i < arr.length; i++) {
//         // 1.4 判断如果数组中某一个数比最大的还要大
//         if (arr[i] > max) {
//             // 1.4.1 把某个数赋值给 最大值
//             max = arr[i]
//             // 1.5 返回最大值

//         }


//     }
//     return max;

// }

// console.log(maxvalue())




//  求任意一个 数组中最大值



// function maxvalue(arr) {

//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }


//     return max;


// }

// var arr1 = [1, 3, 5, 6, 2, 888, 9, 44, 33]

// console.log(maxvalue(arr1))



// arguments  是对象只能在函数体内使用  可以接受传入 实参

// 像一个数组 有length 


// arguments 是一个对象 像数组 可以遍历 可以 通过的索引找到数组中的元素

// 可以接受传入实参



// function add() {
//     console.log(arguments[0] + arguments[1]);
// }
// add(43, 99)




// function add() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     return sum;
// }

// console.log(add(1, 2, 3))
// console.log(add(1, 553))





function x(n) {
    var j = 1;
    var flag = false;
    for (var i = 0; i < n; i++) {
        j *= 3;
        if (j === n) {
            flag = true;
            break;
        } if (j > n) {
            flag = false;
            break;
        }


    }
    return flag;
}
console.log(x(81))