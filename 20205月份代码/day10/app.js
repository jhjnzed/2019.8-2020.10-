const express = require('express');
const path = require('path');
const multer = require('multer')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
let uploader = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, 'upload'))
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
})

app.post('/profile', uploader.single('avatar'), function (req, res) {
    console.log(req.file)

    console.log(req.body)
})

app.listen(80, () => {
    console.log('打开 : http://localhost')
})