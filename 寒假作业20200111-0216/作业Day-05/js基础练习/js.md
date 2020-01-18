## js解答题
1. 如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？

2. 100+100结果是200，那么100+‘100’结果是什么，为什么？

3. 请说说 `+` 号有几层含义，分别是什么？

4. 前--和后--的区别是什么？


## js编程题

1. 如何能够判断一个数字是小数还是整数？

   ```js
    
   ```

2. 探究题：详见下面代码

   ```js
    isNaN('') // false
    isNaN('1A') // true
    isNaN(true) // false
    isNaN({}) // true
    isNaN([1,1]) // true
    // 探究：根据isNaN的作用你是否能说明出现上面现象的原因
   ```

3. 打印下面的输出结果

   ```js
    var num1 = 12, num2 = '12', num3 = '', num4;
    console.log(num1 + num2);
    console.log(num1 + +num3);
    console.log(num1 + +num4);
    console.log(+num2 + !!num3);
    console.log(!!num2 + !!num4);
   ```

4. 打印下面的输出结果

   ```js
    1) var a = 10,
         b = ++a,
         c = a--,
         d = c++ + ++b + --a;
     console.log(a, b, c, d);
    
    2) var a = 100,
         b = --a,
         c = a-- + b++,
         d = a - b-- + ++c;
     console.log(a, b, c, d);
   ```
