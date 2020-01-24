## js简答题

1. 简述三种循环？  for循环while循环

   do while 

2. 试着说说你会如何合适使用三种循环？for循环正常需要将一个语句执行几次时使用，而循环在需要满足某个表达式后才执行语句时使用do while循环在满足某个表达式之前会执行一次语句时使用

3. 什么是死循环？列举一个死循环？不停的执行循环体无法跳出循环

4. while循环和do...while的区别是什么？while语句先执行循环体，然后判断循环条件是否成立


## js编程题

1. 使用一个for循环按顺序打印出：`10，8，6，4，2，0，-2`

    ```js
    var num = 10;
    
    for（var i = 0; i <7; i ++）{console.log（num）; num-= 2; }
    ```

2. 使用一个while循环按顺序打印出：`2，0，-2，-4，-6，-8，-10`

    ```js
    var num = 2; var i = 1;
    
    while（i <= 7）{console.log（num）; num-= 2; i ++; }
    ```

3. 使用一个do...while循环打印出：`100`

    ```js
    var num = 100;
    
    做{console.log（num）; } while（false）;
    ```

4. 使用一个for循环实现：1-100之间所有偶数的打印
    要求：使用两种方式实现（其中一个方式必须使用 `continue` 关键字）

    ```js
    js简答题
    简述三种循环？
    
    for 循环: 循环次数有限
    while 循环: 循环次数可有限可无限
    do..while 循环: 先执行一次代码，在判断条件（循环次数可有限可无限）
    试着说说你会如何合适使用三种循环？
    
    for: 适用于明确次数的循环
    while: 适用于不明确次数的循环
    do..while: 适用于不先判读条件，先需要执行代码的循环，且不明确次数的
    什么是死循环？列举一个死循环？
    
    while(true){} or do{..}while(true)
    while循环和do...while的区别是什么？
    
    while: 先判断条件是否满足循环，再执行内部代码
    do..while: 先直接内部代码一次，再判断是否继续循环
    js编程题
    使用一个for循环按顺序打印出：10，8，6，4，2，0，-2
    
    for (var i = 10; i >= -2; i -= 2) {
        console.log(i);
    }
    使用一个while循环按顺序打印出：2，0，-2，-4，-6，-8，-10
    
    var i = 2;
    while (i >= -10) {
        console.log(i);
        i -= 2;
    }
    使用一个do...while循环打印出：100
    
    do {
        console.log(100);
    } while (false)
    使用一个for循环实现：1-100之间所有偶数的打印 要求：使用两种方式实现（其中一个方式必须使用 continue 关键字）
    
    // 方式一：
    for (var i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    // 方式二：（使用continue）
    for (var i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            continue;
        }
        console.log(i);
    }for（var i = 0; i <= 100; i ++）{if（i％2 == 0）{console.log（i）; }}
    
    for（var i = 0; i <= 100; i ++）{if（i％2！= 0）{继续; } console.log（i）;
    }
    ```

