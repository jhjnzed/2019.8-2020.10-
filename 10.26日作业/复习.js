上课笔记
this的指向
如果是单纯的函数 那么this指向的是Window对象
如果是对象中的函数有this 那么this指向的是该对象
如果是构造函数中的this 那么this指向新对象
如果使用call或apply改变this的指向 那么this指向的是call的第一个参数对象和 this指向的是apply的第一个参数对象
call和apply
相同点: 都可以改变this的指向
不同点: call和apply的参数类型不一样 call除了第一个参数是对象后面是参数列表 而apply除了第一个参数是对象后面是数组
bind
作用: 改变this的指向
特点: bind()方法会创建一个新函数 所欲bind改变this的指向之后 不会立即指向 需要手动调用绑定函数 bind()方法的参数和call是一样的
Math对象
Math.PI 圆周率
Math.sqrt(要开平方的数) 开平方
Math.floor() 向下取整
Math.ceil() 向上取整
Math.round() 四舍五入
Math.abs() 绝对值
Math.max() 最大值
Math.min() 最小值
Math.pow(底数, 指数) 底数次幂
Math.random() 随机数
取[0, 1) Math.random();
取[min, max) (Math.random() * (max - min)) + min
取[min, max](Math.random() * (max - min + 1) + min);
Date()日期对象
//语法: 
let date = new Date();  //如果Date方法中没有参数则为获取当前日期

let date = new Date("2019-10-10 08:00:00");  // 如果Date方法中有参数则为设置时间

如何获取Date()对象的原始值

date.valueOf()
Date.now();
+new Date();
获取年 月 日 小时 分钟 秒 毫秒

年 date.getFullYear();
月 date.getMonth() + 1;
日 date.getDate();
时 date.getHours();
分 date.getMinutes();
秒 date.getSeconds();
毫秒 date.getMilliseconds();
学生管理系统
需求
录入6个学生成绩信息， 用对象数组存储学生信息，每个学生拥有的属性是学号，姓名，年龄，成绩，例子如下: var stuInfo = [{ sId: 1, name: '张三', age: 18, score: 80 }] 根据现有的存储数据, 和用户进行交互, 完成对数据的, 增, 删, 改, 查, 的功能.

    分析
整体的思路分析
功能五: 退出管理系统
功能四: 删除学生信息
功能三: 查找学生信息
功能二: 修改学生信息
功能一: 添加学生信息
整体的
1.首先 弹出一句话 "欢迎进入学生管理系统"
2.while死循环
3.弹出 操作菜单 "请输入操作项的序号: 1.添加学生信息 2.查找学生信息 3.修改学生信息 4.删除学生信息 5.退出管理系统"
// 步骤:
// 1.弹出一句话 "欢迎进入学生管理系统"
alert("欢迎进入学生管理系统");
// 2.while死循环
while (true) {
    // 2.1 弹出 操作菜单  "请输入操作项的序号:  1.添加学生信息 2.查找学生信息 3.修改学生信息 4.删除学生信息 5.退出管理系统"
    let menuNum = prompt(`
        请输入操作项的序号:
        1.添加学生信息 
        2.修改学生信息 
        3.查找学生信息 
        4.删除学生信息 
        5.退出管理系统
            `)

}
功能五: 退出管理系统
判断用户选择的序号是不是5
如果是5 弹出一句话 您真的要退出系统吗？
判断如果用户选择的是 确定 那么退出
判断如果用户选择的是 取消 那么回到主菜单
// 2.2 判断用户选择的序号是不是5
if (menuNum == 5) {
    // 2.2.1 如果是5 弹出一句话 您真的要退出系统吗？
    let escChoose = confirm("您真的要退出系统吗？");
    // 2.2.2 判断如果用户选择的是 确定 那么退出 
    if (escChoose) {
        break;
    }
}

功能四: 删除学生信息
定义一个对象数组 作为假数据 来初始化信息
判断用户选择的是不是4 如果是4
循环遍历stuInfo这个数组把数组中的每个姓名拿出来
    (提示框)弹出一个菜单 "请您选择要删除的学生信息序号 0.拉拉 1.丽丽 2.明明 3.瑶瑶 4.小小"
接收用户选择的序号
使用stuInfo.splice(用户选择的序号, 1)
弹出: 学生信息删除成功
// 2.3 判断用户选择的是不是4 如果是4
if (menuNum == 4) {
    // 2.3.1 循环遍历stuInfo这个数组把数组中的每个姓名拿出来
    let delStr = "";
    for (let i = 0; i < stuInfo.length; i++) {
        delStr += `${i}.${stuInfo[i].name} \n`
    }
    // 2.3.2(提示框)弹出一个菜单 "请您选择要删除的学生信息序号 0.拉拉 1.丽丽 2.明明 3.瑶瑶 4.小小"
    let delNum = prompt("请您选择要删除的学生信息序号: \n" + delStr) - 0;
    // 2.3.3 接收用户选择的序号 Number(delNum)
    // alert(typeof delNum);
    // 2.3.4 使用stuInfo.splice(用户选择的序号,1)
    stuInfo.splice(delNum, 1);
    // 2.3.5 弹出: 学生信息删除成功
    alert("学生信息删除成功");
}
功能三: 查找学生信息
判断用户选择的序号是不是 3
遍历stuInfo, 拼接字符串 让用户选择他要的学生姓名所对应的学生信息编号
通过用户选择的序号 找到该序号在stuInfo中对应的学生信息
打印学生信息
// 2.4  判断用户选择的序号是不是 3
if (menuNum == 3) {
    // 2.4.1 遍历stuInfo 拼接字符串 
    let showStr = "";
    for (let i = 0; i < stuInfo.length; i++) {
        showStr += `${i}.${stuInfo[i].name} \n`
    }
    // 2.4.2 提示用户"请选择您要查找的学生信息编号..."
    let showNum = +prompt("请您选择要查询的学生信息序号: \n" + showStr);
    // 2.4.3 接收用户输入的编号

    // 2.4.4 根据用户编号 找到用户的信息 然后遍历该用户信息对象
    let showInfo = "";
    for (var key in stuInfo[showNum]) {
        // 在这里可以添加一个switch 把对象中的键改成中文
        // name: 张三
        showInfo += `${key}:${stuInfo[showNum][key]} \n`
    }
    // 2.4.5 通过拼接字符串 打印学生信息
    alert("学生信息如下: \n" + showInfo);
}
功能二: 修改学生信息
判断一下输入的序号是不是2
循环遍历stuInfo那个数组 把数组中的所有人的名字列出来 让用户选择
获取用户输入的序号
提示"请您修改姓名数组" 根据用户输入的序号获取的那个对象所对应的名字
把用户重新输入的名字设置给 之前用户输入的序号所对应的那个对象的name属性
提示修改数据成功
// 2.5  判断一下输入的序号是不是2
if (menuNum == 2) {
    // 2.5.1  循环遍历stuInfo那个数组 把数组中的所有人的名字列出来 让用户选择
    let updateStr = "";
    for (let i = 0; i < stuInfo.length; i++) {
        updateStr += `${i}.${stuInfo[i].name} \n`
    }
    let updateNum = +prompt("请您选择要修改的学生信息序号: \n" + updateStr);
    // 2.5.2 获取用户输入的序号

    // 2.5.3 提示"请您修改姓名数据" 根据用户输入的序号获取的那个对象所对应的名字
    let updateName = prompt("请您重新输入姓名", stuInfo[updateNum].name);
    // 2.5.4  把用户重新输入的名字设置给 之前用户输入的序号所对应的那个对象的name属性
    stuInfo[updateNum].name = updateName;
    // 2.5.5 提示修改数据成功
    alert("数据修改成功");
}
功能一: 添加学生信息
判断用户选择的序号是不是1
提示用户输入用户名
判断stuInfo中有没有这个名字
如果有 就提示 已经存在 需要重新输入名字
如果没有 就添加到数组中
// 2.6 判断用户选择的序号是不是1
if (menuNum == 1) {
    // 2.6.1 提示用户输入姓名
    // flag 一般存的都是 状态(true false)
    let flag = false; // 假设名字不重复
    // 2.6.2 循环遍历stuInfo
    while (true) {
        // 接收用户输入学生姓名
        let name = prompt("请输入学生姓名");
        // 只有一个功能: 判断用户输入的名字是不是重复
        // 如果重复就是true 如果不重复就是false
        for (let i = 0; i < stuInfo.length; i++) {
            if (stuInfo[i].name == name) {
                flag = true;
                alert("用户已经存在,请重新输入");
                break;
            } else {
                flag = false;
            }
        }
        // 如果确实不重复  false
        if (flag == false) {
            // 2.6.2.1.2 如果不在 继续输入 年龄 和成绩
            let age = prompt("请输入学生年龄");
            let score = prompt("请输入学生成绩");
            // 2.6.2.1.2.1 把用户输入的姓名 年龄 成绩添加到数组中
            stuInfo.push({
                name: name,
                age: Number(age),
                score: Number(score)
            });
            alert("学生信息添加成功");
            break;
        }
    }
}