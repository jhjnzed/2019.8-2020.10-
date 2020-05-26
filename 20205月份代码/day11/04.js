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

stuss.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))