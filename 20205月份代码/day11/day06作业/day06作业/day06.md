## 简答题

1. 创建数据库quanzhan12
```js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quanzhan12', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('数据库连接成功') })
    .catch((err) => { console.log(err, '数据库连接失败') })
```
============================================class集合==============================
2. 创建集合class,集合的规则要求如下
> 姓名:字符串类型
> 年龄:数字类型
> 性别: 数字类型
> 业务爱好:数组类型
```js
let Class = new mongoose.Schema({
    name: String,
    age: Number,
    sex:Number,
    hobby: Array
})
```
============================================增加操作===============================
3. 在class的集合中插入文档
>姓名:zhangsan,年龄:22,性别:0,业务爱好：["draw","computer"]
>姓名:jialala,年龄:18,性别:1,业务爱好：["sing","draw","football"]
>姓名:yaoyao,年龄:24,性别:1,业务爱好：["football","computer","running"]
>姓名:yangwenlin,年龄:19,性别:0,业务爱好：["sing","computer"]
```js
let Class = new Many(
    { name: "zhangsan", age: 22, sex: 0, hobby: ["draw", "computer"] },
    { name: "jialala", age: 18, sex: 1, hobby: ["sing", "draw", "football"] },
    { name: "yaoyao", age: 24, sex: 1, hobby: ["football", "computer", "running"] },
    { name: "yangwenlin", age: 19, sex: 0, hobby: ["sing", "computer"] }
);
```
============================================查询操作===============================
4. 查询所有人的信息
```js
Class.find()
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
```
============================================score集合==============================

5. 创建集合score,集合的规则要求如下
> 姓名:字符串类型
> 数学成绩: 数字类型
> 英语成绩: 数字类型
> 语文成绩: 数字类型
```js
let score = new mongoose.Schema({
    name: String,
    MathNum: Number,
    EnglishNum:Number,
    ChineseNum: Array
})
```
============================================增加操作===============================
6. 在class的集合中插入文档
>姓名:zhangsan,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:jialala,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yaoyao,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yangwenlin,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
```js
let Class = new Many(
    { name: "zhangsan", MathNum: 22, EnglishNum: 0, ChineseNum: 70 },
    { name: "jialala", MathNum: 18, EnglishNum: 1,ChineseNum: 150 },
    { name: "yaoyao", MathNum: 24, EnglishNum: 1, ChineseNum:150 },
    { name: "yangwenlin", MathNum: 19, EnglishNum: 0, ChineseNum: 150 }
);
```
============================================查询操作===============================
7. 查询所有成绩
```js
Class.find()
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
```

============================================老师集合==============================
8. 创建集合teacher,集合的规则要求如下
> 姓名:字符串类型
> 性别: 数字类型
> 年龄: 数字类型
> 新资: 数字类型
```js
let teacher = new mongoose.Schema({
    name: String,
    age: Number,
    sex:Number,
    Mony: Number
})
```
============================================增加操作===============================
9. 在class的集合中插入文档
这个你自己定义，插入3条文档就可以
```js
let Class = new Many(
    { name: "jialala", age: 18, sex: 1, money: 8000 },
    { name: "yaoyao", age: 24, sex: 1, money:5000 },
    { name: "yangwenlin", age: 19, sex: 0, money: 13000 }
);
```
============================================查询操作===============================
10. 查询所有老师的信息
```js
teacher.find()
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
```

