## 简答题

1. 创建数据库fullstack2019
```js
// 引入mongoose包
const mongoose = require('mongoose')
// 引入mongoose方法
mongoose.connect('mongodb://localhost/fullstack2019', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('数据库连接成功') })
    .catch((err) => { console.log(err, '数据库连接失败') })
```
============================Student集合==================
2. 创建集合Student,集合的规则要求如下:
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 年龄:数字类型，最大年龄不能超过25岁，必传，提示年龄不能大于25岁
> 性别: 字符串类型，只能是男或者是女，枚举，必传，
> 业务爱好:draw,computer,sing,football,running
```js
let studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,''],
        minlength: [2,''],
        maxlength: [6,''],
        trim: true
    },
    
    age: {
        type: Number,
        required: [true,''],
        validate: {
            validator: v => {
                return v && v >= 0 && v <= 25; 
            },
            message: '年龄不能大于25岁'
        }
    },
    
    sex: {
        type: String,
        required: [true,''],
        enum: {
            values: ['Male','Female'],
            message: ''
        }
    },
    
    hobby: {
        type: String,
        enum: {
            values: ['draw','computer','sing','football','running'],
            message: ''
        }
    }
});

let student = mew mongoose.model('student',studentSchema);
```
=============================增加操作=============================
3. 在Student的集合中插入文档
>姓名:杨文林,年龄:19,性别:男,业务爱好：["draw","computer"]
>姓名:贾拉拉,年龄:18,性别:女,业务爱好：["sing","draw","football"]
>姓名:姚姚,年龄:24,性别:女,业务爱好：["football","computer","running"]
>姓名:王凯,年龄:25,性别:男,业务爱好：["sing","computer"]
```js
let student = students.create(
    {
        name: '杨文林',
        age: 19,
        sex:'男',
        hobby: ["draw","computer"]
    },
    {
        name: '贾拉拉',
        age: 18,
        sex:'女',
        hobby: ["sing","draw","football"]
    },
    {
        name: '姚姚',
        age: 24,
        sex:'女',
        hobby: ["football","computer","running"]
    },
    {
        name: '王凯',
        age: 25,
        sex:'男',
        hobby: ["sing","computer"]
    }
)
```

=============================Score集合==============================

4. 创建集合Score,集合的规则要求如下
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 数学成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 英语成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 语文成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
```js
let Student = new mongoose.Schema(
    {Math: {
        type:Number,
        required: [true,'message'],
        validate: {
        	validator: v => {
                return v && v >= 0 && v <= 100
            },
            message: 'message'
    	}
	}},
        {English: {
        type:Number,
        required: [true,'message'],
        validate: {
        	validator: v => {
                return v && v >= 0 && v <= 100
            },
            message: 'message'
    	}
	}},
        {Chiness: {
        type:Number,
        required: [true,'message'],
        validate: {
        	validator: v => {
                return v && v >= 0 && v <= 100
            },
            message: 'message'
    	}
	}}
);

let score = mew mongoose.model('score',Student);
```
=============================增加操作===============================
5. 在Score的集合中插入文档
>姓名:杨文林,英语成绩：88，数学成绩：99，语文成绩：80，
>姓名:贾拉拉,英语成绩：79，数学成绩：88，语文成绩：90，
>姓名:姚姚,英语成绩：90，数学成绩：90，语文成绩：90，
>姓名:王凯,英语成绩：98，数学成绩：90，语文成绩：99
>
>```js
>let Student = score.create({
> name:'杨文林',English:88,Math:99,Chinese:80,
> name:'贾拉拉',English:79,Math:88,Chinese:90,
> name:'姚姚',English:90,Math:90,Chinese:90,
> name:'王凯',English:98,Math:90,Chinese:99
>})
>```
>
>

6. 查询所有学生的信息
```js
students.find()
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
```

7. 查询年龄大于18岁小于24岁的学生的信息
```js
students.find(
    {
        age:{$gt:18,$lt:24}
    }
).then((data)=>{console.log(data)})
```

8. 查询年龄19岁并且喜欢计算机的男生的信息
```js
students.find(
    {
        age:19,
        hobby:{$in:'计算机'}
    }
).then((data)=>{console.log(data)})
```

9. 查询班级中年龄最大的学生的信息
```js
students.find()
    .sort('-age')
	.limit(1)
    .then(data =>console.log(data))
```

10. 查询年龄是18岁的学生的姓名
```js
student.find({
    age: {$gt:18&&$lt:18},
	})
	.select('name')
	.then(data => console.log(data))
```
11. 查询总人数(提示count)
```js
  student.find()
	.count()
	.then(data => console.log(data))
```

12. 查询显示第二页的数据，每页显示2条
```js
student.find()
	.skip(2)
	.limit(2)
	.then(data => console.log(data))
```
13. 查询业余爱好里面包含sing的学生的信息
```js
students.find(
    {
        hobby: {
            $in: 'sing'
        }
    }
).then((data) => { console.log(data) })
```
14. 对数学成绩降序输出
```js
students.find().sort('-Math').then(result=>console.log(result))
```

15. 查询姓名是王凯的各科成绩
```js
score.find({
    name: '王凯'
	})
	.then(data => console.log(data))
```

===============================更新操作===============================

16. 将姓名是姚姚的学生的年龄更改为23
```js
students.updateOne(
    { name:'姚姚' },
    {age: 23})
    .then((data) => { console.log(data + '数据修改成功') 
})
```
17. 将所有学生的年龄更改为18
```js
students.updateMany(
    {},
    {age:18})
    .then((data)=>{console.log(data+'数据修改成功')
})
```
18. 将王凯的数学成绩更新为100分
```js
 student.updateOne(
     {name:'王凯'},
     {math:100}
 	)
	.then(data => console.log(data))
```
==================================删除操作=============================
19. 删除年龄小于20的学生的信息
```js
student.deleteMany({
    age:{$lt:20}
	})
	.then(data => console.log(data))
```
20. 删除姓名是贾拉拉的这条数据
```js
students.findOneAndDelete(
    { name:'贾拉拉' })
    .then((data) => { console.log(data) })
```

