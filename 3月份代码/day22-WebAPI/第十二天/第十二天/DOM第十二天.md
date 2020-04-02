# DOM第十二天

## client系列

### clientLeft和clientTop

clientLeft：左边框的宽度

clientTop：上边框的宽度

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: aqua;
            border: 5px solid red;
            margin: 100px auto;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        let a = document.querySelector('div')
        console.log(a.clientLeft)
        console.log(a.clientTop)
    </script>
</body>
</html>
```

### clientWidth和clientHeight

clientWidth：获取不包括边框的宽度

clientHeight：获取不包括边框的高度

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: aqua;
            border: 5px solid red;
            margin: 100px auto;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        let a = document.querySelector('div')
        console.log(a.clientWidth)
        console.log(a.clientHeight)
    </script>
</body>
</html>
```

## scroll系列

### scrollLeft和scrollTop

scrollLeft：被卷去的宽度。

scrollTop：被卷去的高度



### scrollWidth和scrollHeight

scrollWidth：获取的是指定标签内内容的真实宽度

scrollHeight：获取的是指定标签内内容的真实高度