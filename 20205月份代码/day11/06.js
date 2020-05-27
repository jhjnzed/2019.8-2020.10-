// 查询course中的所有数据
// Course.find().then(data=>{console.log(data)})

// 查找数据库中 名字为肖恩的数据

// 查询名字为肖恩的 数据


// 1.连接数据库
// 1.引入mongoose这个包
const mongoose = require('mongoose');
// 2.使用mongoose的包的connect方法来连接数据库
mongoose.connect('mongodb://localhost/db_user', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("数据库连接成功")
    })
    .catch((err) => {
        console.log(err, '数据库连接失败')
    });


// 3.创建约束
let userSchema = new mongoose.Schema({
    // 用户名
    username: String,
    // 姓名
    name: String,
    // 邮箱
    email: String,
    // 年龄
    age: Number,
    // 爱好 爱好是数组 但是具体的爱好是字符串
    hobbies: [String]
})


// 4.应用约束
let User = new mongoose.model('User', userSchema);

User.deleteMany({}).then((data) => {
    console.log(data)
})
// User.deleteMany({
//     age: 18
// }).then((data) => {
//     console.log(data)
// })