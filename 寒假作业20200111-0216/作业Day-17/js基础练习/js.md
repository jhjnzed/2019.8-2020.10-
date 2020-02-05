```js
js简答题
对象组成都是采用键值对的形式，我们是否能把函数放到对象的属性值当中？该怎么做？

可以。
对象.键 = function(){};
能够使用什么方法遍历对象？如何遍历打印对象的属性名和属性值？

for(var key in object) ----遍历object对象
{
    console.log(key); ----打印对象的属性名
    console.log(object[key]); ----打印对象的属性值
};
遍历对象的方法能否也拿来遍历数组？为什么？

可以。
因为数组也属于一种对象。能遍历对象，自然也能遍历数组对象。
我们知道给对象添加属性有三种方式，那么删除对象的属性能否也有三种方式或者更多呢？请说说你认为删除对象属性的方式有哪些

'删除对象属性的方式':
1. delete 对象.属性;
2. delete 对象['属性'];
3. var del = '对象的某属性名';
   delete 对象[del];
4. ...
js编程题
定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
将对象得年龄这个属性删除
将对象的身高的值题换成"180cm"
给对象添加属性学号，通过两种方式
// 1.
var coke = {
   name: '可乐',
   age: '3',
   sex: '水',
   height: '未知',
   hobby: function () {
       console.log('吃饭,跑步');
   }
};
// 2.
for (var key in coke) {
   console.log(key);
   console.log(coke[key]);
}
coke.hobby();
// 3.
delete coke.age;
// 4.
coke.height = '180cm';
// 5.
coke.id = 6; // 方式一
coke['id'] = 6 // 方式二
// 打印对象
console.log(coke);
定义一个车的对象，属性有颜色，大小，型号，方法有：能行驶
获取对象的颜色，在控制台输出
调用方法，在控制台输出格式要求马路上正在行驶的是一辆xx色的xx型号的车
var car = {
   color: '黑',
   size: 'middle',
   type: 'M',
   way: function () {
       return '行驶'
   }
};
console.log(car.color);
console.log(`马路上正在${car.way()}的是一辆${car.color}色的${car.type}型号的车`);
【冒泡排序】对下面的数组进行从小到大排序，不允许使用sort
var arr = [4, 2, 7, 5, 3, 1, 6, 9, 8];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var num = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = num;
        }
    }
}
console.log(arr);
【冒泡排序】对下面的数组进行从大到小排序，不允许使用sort
var arr = [4, 2, 7, 5, 3, 1, 6, 9, 8];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            var num = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = num;
        }
    }
}
console.log(arr);xxxxxxxxxx     var arr = [4,2,7,5,3,1,6,9,8]js
```