# 事件绑定

## 元素.on(事件类型,委托对象,事件处理程序)——可以触发多次

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>点击</button>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $('button').on('click',function () {
            alert('你好')
        })
    </script>
</body>
</html>
```

**事件委托的时候需要用到委托对象**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>点击</button>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $('body').on('click','button', function () {
            alert('你好')
        })
    </script>
</body>

</html>
```

## 元素.one(事件类型,事件处理程序)——只可触发一次

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>点击</button>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $('button').one('click', function () {
            alert('你好')
        })
    </script>
</body>

</html>
```

# 事件解绑

## 解绑元素.off(‘要解绑事件‘)

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
        }
    </style>
</head>

<body>
    <button>点击</button>
    <div></div>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $('button').on('click', function () {
            console.log(111)
        })
        $('div').on('click',function () {
            console.log(222)
            $('button').off('click')
        })
    </script>
</body>

</html>
```

# 常见事件类型

## 页面载入事件





## 鼠标事件

click

mousemove

mouseout



## 键盘事件

keydown

keyup

# 事件切换

## 鼠标移入移出——hover()

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
        }
    </style>
</head>
<body>
    <div></div>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $('div').hover(function () {
            $(this).css('backgroundColor','green')
        },function () {
            $(this).css('backgroundColor','red')
        })
    </script>
</body>
</html>
```

## 元素显示隐藏——toggle()

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
        }
    </style>
</head>
<body>
    <button>点击</button>
    <div></div>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $('button').on('click',function () {
            $('div').toggle()
        })
    </script>
</body>
</html>
```

# 事件坐标

## 相对可视窗口左上角——clientX/clientY

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $(document).on('mousemove',function(e) {
            console.log(e)
            console.log(e.clientX,e.clientY)
        })
    </script>
</body>
</html>
```

## 相对页面左上角——pageX/pageY

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $(document).on('mousemove',function(e) {
            console.log(e)
            console.log(e.pageX,e.pageY)
        })
    </script>
</body>
</html>
```

## 相对元素左上角——offsetX/offsetY

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
        }
    </style>
</head>
<body>
    <div></div>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $('div').on('mousemove',function(e) {
            console.log(e)
            console.log(e.offsetX,e.offsetY)
        })
    </script>
</body>
</html>
```

# 阻止事件冒泡





# 取消事件默认行为

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="http://baidu.com">百度</a>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        $('a').on('click',function (e) {
            e.preventDefault()
        })
    </script>
</body>
</html>
```

