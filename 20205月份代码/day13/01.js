const express = require('express');
const app = express();

app.get('/resa', (req, res, next) => {
    req.name = '憨憨',
        console.log(1231);
    next()
})
app.get('/resa', (req, res) => {
    console.log(5654654);
    res.send(req.name)
})
app.listen(80)