# 运算符

-----

**运算符一般只操作基本数据类型数据，不操作复杂类型数据****(****特殊情况除外****)**

运算符用于参与计算机数学计算（+，-，*，/）

运算符用于将一个值进行运算从而得出所需要的结果值。

运算（result）

1.  加法运算符

   var a = 1；

   var b = 2；

   var result = a+b；//1+2

   console.log(jresult); //  3

2. 减法

var a = 6；

var b =2；

var result = a-b；// 6-2

console.log(result) // 4

3. 乘法

   var a = 2；

   var b = 3；

   var  result = a*b；// 2 * 3

console.log(result); // 6

4.  除法

   var a =6 ；

   var b = 2；

   var result = a/b‘   // 6/2

   console.log(result);//    3

   5.   运算符： %（取余数）

         

      ----

      

      自增运算:运算符：

6. 前置自增 ++a   后置自增 a++

   ++ a所代表的含义是在原来值的基础之上 +1 ，a++ 相当于 a+1（先算值后+1）

   ​                       ++a,称为前置++,先自增1,再使用值

   ​                       a++,称为后置先使用值再自增
   

#### 前置++

var a = 3;

var b = 4;

var result = ++a + b;

console.log(result);   // 8

console.log(a);  // 4



#### 后置++

#### var a = 3;

var b = 4;

var result = a++ + b;

console.log(result);   // 7

console.log(a);   // 4

自减a--   、--a 同理



#### **比较运算符**

比较运算符的返回值一定为布尔值

（1）相等于 ==  （2）绝对等于===   （3）不等于     !=   （4）小于大于   <>      小于等于 <=







#### 

####  **逻辑运算符**

(1) 与 &&    （2）或 ||

var a=5;

var b=3;

var c=2;

console.log(a>b && a>c);         // true  真真为真

console.log(a>b && c>a);         // false 真假为假 

console.log(a==b && a==c);    // false  假假为假

（3） 非 ！  （并非的意思） 

var a=4;

var b=6;

console.log(a<b);          //  true

console.log(!(a<b));      //  false

console.log(a>b);          //  false

console.log(!(a>b));      //  true

console.log(a==b);        //  false

console.log(!(a==b));    //  true;





#### 三元运算符

即三个操作数参与计算的运算符

① 判断条件表达式

② 若条件表达式为true，运算结果为结果1

③ 若条件表达式为false，运算结果为结果2



(5>7)?console.log("error"):console.log("5小于7");   // 5小于7

如果5>7 是真的，那么结果就为冒号(:)左边的表达式 "error"

否则的话，结果就为冒号(:)右边的表达式 "5小于7"



（在：两边判定为两种定量）





### 

### **7.** **小结**





①  算术运算符

​      将操作符参与数学计算(通常为数学计算，+号也有特殊的用法，如连接字符串)

②  赋值运算符

​      为变量赋值的运算符

③  比较运算符

​      又叫关系运算符，即判断两个操作数的大小关系及是否相等的关系，比较运算符的返回值一定为布尔值。

④  逻辑运算符

​      逻辑运算符用于测定变量或值之间的逻辑。

⑤  三元运算符

​      又叫条件运算符即三个操作数参与计算的运算符。





#### 1优先级概念

优先级即运算符运算时的先后顺序，优先级越高，计算顺序越靠前

#### 2规则

![1569423618441](C:\Users\吾之初心永世难忘\AppData\Roaming\Typora\typora-user-images\1569423618441.png)





#### 警告框

②语法

window.alert("*sometext*");   sometext 表示要弹出的语句

**window.alert()** 方法可以不带上window对象，直接使用**alert()**方法。

③实例：

alert("你好，我是一个警告框");

运行结果：你好，我是一个警告框



#### 确认框

①什么是确认框？

确认框通常用于验证是否接受用户操作。

当确认卡弹出时，用户可以点击 "确认" 或者 "取消" 来确定用户操作。

当你点击 "确认", 确认框返回 true， 如果点击 "取消", 确认框返回 false。

②语法

window.confirm("*sometext*");   sometext 表示要弹出的语句

**window.confirm()** window**confirm()**

③实例：

// 声明变量r为一个确认框

var r = confirm("你好，我是一个确认框");

// 判断r是否为true

// 如果为true,

// 则说明按下了确定按钮

// 否则按下了取消按钮

r==true?alert("你按下了'确定'按钮!"):alert("你按下了'取消'按钮!");





后面没有多少了，但都能理解，由于时间关系就不写 了。