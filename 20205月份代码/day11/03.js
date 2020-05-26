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
stuss.create({
        name: '憨憨',
        age: 18,
        address: "山海经",
        hobbies: ['Array', '吃人', '杀人', '恶作剧']
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))