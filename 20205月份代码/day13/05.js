const express = require('express');
const app = express();

const home = express.Router();
app.use('/home', home)
home.get('/', (req, res) => {
    res.send('这是首页')
})

home.get('/recsasg', (req, res) => {
    res.send('这是副本')
})

app.listen(80)