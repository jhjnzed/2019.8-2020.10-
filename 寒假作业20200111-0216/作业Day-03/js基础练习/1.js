// js编程题
// 1.字面量创建一个对象：【姓名:可乐 年龄:18 性别:你猜 爱好:Rush B】
var obj = {
    name: "可乐",
    age: 18,
    sex: "你猜",
    aihao: "Rush B",
}
console.log(obj)
// 2.使用new关键字创建一个对象：【姓名:雪碧 年龄:19 性别:未知 爱好:Rush A】
var obj = new Object();
obj.name = "雪碧";
obj.age = 19;
obj.sex = "未知";
obj.like = "Rush A"
console.log(obj)

// 3.根据步骤操作对象

// 1) 定义一个对象：【姓名:柠檬 年龄:17】
// 2) 输出该对象的姓名
// 3) 修改该对象年龄为：未成年
// 4) 添加对象属性：性别为女，爱好为画画，职业为学生
// 5) 输出该对象
// 6) 删除该对象的姓名
// 7) 输出该对象
var obj = {
    name: "柠檬",
    age: 17,
}
console.log(obj.name);
obj.age = "未成年";
obj.sex = "女";
obj.like = "画画";
obj.Occupation = "学生";
console.log(obj)
delete obj.name;
console.log(obj);

// 4.使用三种方式给对象var obj = {name:"杨"}添加属性age为30

// `参考答案：
// 1) obj.age = 30; 
// 2) obj['age'] = 30; 
// 3) var age = "age"; obj[age] = 30;`
var obj = {
    name: "杨"
}
// 第一种
obj.age = 30;
// 第二种
obj['age'] = 30;
// 第三种
var age = "age";
obj[age] = 30;
console.log(obj)