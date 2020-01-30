## js简答题
1. 怎么定义一个二维数组？ (1)直接定义 (2)先定义一维数组，再定义二维数组，再给数组赋值
2. 数组的方法有哪些？请列举10个，并说明方法的作用 .push——给数组最后添加元素 .pop——删除数组中最后一个元素 .delent——删除数组中一个元素 .sort——数组排序 .reverse——数组反转 .length——遍历数组 .concat——合并数组 .unshift——在数组开头添加元素 .push——在数组末尾添加元素 .join——将数组改为字符串形式
3. 怎么获取二维数组里面的某一个元素，自己定义数组 遍历数组，获得元素的下标，然后根据下标获取某一元素。
4. 数组的长度和数组的下标(索引)的对应关系 数组长度减一就是数组下标的最大值。



## js编程题

1. 定义数组 var arr = [1,2,666,3,4],

- 1） 给数组最后添加1个元素

```
 var arr = [1,2,666,3,4]
 arr.push(13)
 console.log(arr)
```

- 2）给数组最前面添加1个元素

```
 var arr = [1,2,666,3,4]
 arr.unshift(13)
 console.log(arr)
```

- 3）将元素666删除之后，添加一个元素"拉拉"

```
  var arr = [1,2,666,3,4]
  arr.deleat(666)
  arr.push("拉拉")
  console.log(arr)
```

1. 定义数组var arr = [2,4,77,100,1]

- 1）在控制台输出数组的最大值

```
 var arr = [2,4,77,100,1]
 for(var num = 0 ; num < arr.length ; num++) {
     if(arr[num] > arr[num+1]) {
         console.log(arr[num])
     }
 }
```

- 2）在控制台输出数组的最小值

```
 var arr = [2,4,77,100,1]
 for(var num = 0 ; num < arr.length ; num++) {
     if(arr[num] > arr[num+1]) {
         console.log(arr[num])
     }
 }
```

1. 定义数组var arr = [1,2,3,4,5,6,1,2,3,1,2],将数组重复的元素去重,(请使用2种方式实现)

```
// 方法一
    var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2];
    for (var i = 0; i <= arr.length - 1; i++) {
        for (var j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--
            }
        }
    }
    console.log(arr)

    // 方法二
    var array = [];
    var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
```

1. 现有二维数组，var array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];

   - 1). 遍历打印二维数组的所有元素

   ```
   
   ```

for (var num = 0; num < array.length; num++) { for(var i = 0 ; i < array[num].length ; i++) { console.log(array[num][i]) } }

```
- 2). 计算二维数组中所有元素的和
​```js
var number = 0
for (var num = 0; num < array.length; num++) {
   for(var i = 0 ; i < array[num].length ; i++) {
       number += array[num][i]
   }
}
console.log(number)
```

- 3). 求二维数组中所有元素的最大值。

```
for (var n = 0; n < array.length; n++) {
      var number = 0;
      for (var sb = 0; sb < array[n].length; sb++) {
          if (array[n][sb] > number) {
              number = array[n][sb];
          }
      }
  }
  console.log(number);
```

  ```js


  ```