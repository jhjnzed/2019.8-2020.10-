const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_student', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('数据库连接成功了')
    })
    .catch((err) => {
        console.log(err, '数据失败了')
    })
let students = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    hobbies: Array
})

let stuss = new mongoose.model('Student', students);
let ssss = new stuss({
    name: '哈马儿',
    age: 18,
    address: "粪坑",
    hobbies: ['Array', '打游戏', '睡觉', '吃屎']
})

ssss.save();