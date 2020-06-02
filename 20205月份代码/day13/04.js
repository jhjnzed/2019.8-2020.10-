const express = require('express');
const fs = require('fs')
const app = express();
app.get('/', (req, res, next) => {
    fs.readFile('./01.text', "utf8", (err, result) => {
        if (err != null) {
            next(err)
        } else {
            res.send(result)
        }
    })
})
app.listen(3000, function () {
    console.log('http://localhost:3000');

})