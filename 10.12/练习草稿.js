// 数组是什么

// 数组就是存储一系列有序（每个数组都有索引）数据的集合（有多个数据）




// 空数组的 定义 字面量的方式

// 语法 var 变量名 = []

// 所谓的字面量ius通过肉眼就可以看到这个数组有没有元素


// var name =[];

// 没有元素的数组就是空数组

// 空数组的定义 new的方式

// 语法 var  变量名 = new Array();



// var ages = new Array();


// var x = new Array(3)//如果是一个数字代表长度 



// 索引= 下标  就是 某一个元素排第几  第一个元素 是0开始


      

// 数组 的最大索引 =  数组的长度 -1;







// 数组的遍历

// 语法
// i代表索引
// for( var i =0 ; i< 数组名.length ; i++){
//     console.log(数组名[i]);


// }


// var star = [ 1 , 2 , 3 ,4];
// for(var i=0;i<star.length;i++){
//     console.log(star[i]+'*')
// }










// var star =['Angelababy','迪丽热巴','宋雨琦'];

// for(var i=0;i<star.length;i++){
//     console.log(star[i]+'='+'我老婆')
// }





// var star =[5,19,23,6,14,8];

// var sum=0;
// for(var i=0;i<star.length;i++){
// sum+=star[i]
// }console.log(sum,sum/star.length)







// var arr =[1,2,3];
// console.log(arr.length);

// arr.length=5;


// console.log(arr.length);
// console.log(arr);
// console.log(arr[3]);

// arr[3]=6;

// console.log(arr[3]);


// 1清空数组


// arr.length=0;
// // 2重新赋值空数组
// console.log(arr);
// arr = [];









// 添加 末尾  push   删除 末尾  pop   删除最前面的元素 shift  添加最前面的元素 unshift






// var sum= 0

// for (var i=2000;i<=3000;i++){
//     if (i%4===0) {
    
//     sum++
//         console.log(i);
//     }
// }
// console.log(sum);
