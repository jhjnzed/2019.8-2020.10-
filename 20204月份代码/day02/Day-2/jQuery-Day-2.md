# 添加节点

## 插入元素的后面

### append()

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
    <div class="box">
        <b>你好</b>
    </div>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 将要加入的标签放进去
            $('div').append('<b>欢迎光临</b>')
        })
    </script>
</body>

</html>
```

### appendTo()

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
    <b>欢迎光临</b>
    <div></div>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 将要加入的标签放进去
            // 这个代码是将b标签放入div标签
            $('b').appendTo('div')
            // 这个代码是给div标签添加新的a标签
            $('<a href="http://www.baidu.com">百度</a>').appendTo('div')
        })
    </script>
</body>

</html>
```

## 插入元素的前面

### prepend()

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
    <b>欢迎光临</b>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 将要加入的标签放进去
            $('b').prepend('<a href="http://baidu.com">百度</a>')
        })
    </script>
</body>

</html>
```

### prependTo()

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
    <b>欢迎光临</b>
    <a href="http://baidu.com">百度</a>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 将要加入的标签放进去
            $('b').prependTo('a')
        })
    </script>
</body>

</html>
```

## 插入某元素的外面的后面

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
    <b>欢迎光临</b>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 将要加入的标签放进去
            $('a').after('<span>谢谢</span>')
        })
    </script>
</body>

</html>
```

## 插入某元素的外面的前面

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
    <b>欢迎光临</b>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 将要加入的标签放进去
            $('a').before('<span>谢谢</span>')
        })
    </script>
</body>

</html>
```

## 全部元素放到该元素前面（后面）

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
    <b>欢迎光临</b>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 将全部匹配元素放到该元素后面
            $('a').insertAfter('p')
            // 将全部匹配元素放到该元素前面
            $('p').insertBefore('b')
        })
    </script>
</body>

</html>
```

# 替换节点

## replaceWith()

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
    <b>欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
    </div>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 替换选定节点
            $('b').replaceWith('<a>再见</a>')
        })
    </script>
</body>

</html>
```

# 删除节点

## remove()

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
    <b>欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
    </div>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 删除选定节点
            $('b').remove()
        })
    </script>
</body>

</html>
```

## empty()

**注：该方法只会删除选定节点的所有子节点，不会删除该节点**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 100px;
            height: 20px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b>欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
    </div>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            // 替换选定节点
            $('.one').empty()
        })
    </script>
</body>

</html>
```

# 查找节点

## children()——查找元素所有子节点

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b>欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
    </div>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            let num = $('.one').children()
            console.log(num)
        })
    </script>
</body>

</html>
```

## find()——查找该元素是否存在想查找元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b>欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
    </div>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            let num = $('.one').find('b')
            console.log(num)
        })
    </script>
</body>

</html>
```

## parent()——查找该元素的父节点

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b>欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
    </div>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            let num = $('.one').parent()
            console.log(num)
        })
    </script>
</body>

</html>
```

## prev()——查找该元素前一个兄弟元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b>欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
    </div>
    <a href="http://baidu.com">百度</a>
    <p>你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            let num = $('.one').prev()
            console.log(num)
        })
    </script>
</body>

</html>
```

## prevAll()A——查找该元素之前所有兄弟元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b class="two">欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
    </div>
    <a href="http://baidu.com" class="the">百度</a>
    <p class="for">你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            let num = $('.the').prevAll()
            console.log(num)
        })
    </script>
</body>

</html>
```

## next()——查找该元素后面的第一个兄弟元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b class="two">欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
    </div>
    <a href="http://baidu.com" class="the">百度</a>
    <p class="for">你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            let num = $('.the').next()
            console.log(num)
        })
    </script>
</body>

</html>
```

## nextAll()——查找该元素后面的所有兄弟元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b class="two">欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
    </div>
    <a href="http://baidu.com" class="the">百度</a>
    <p class="for">你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            let num = $('.one').nextAll()
            console.log(num)
        })
    </script>
</body>

</html>
```

## siblings()——查找该元素所有的兄弟元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b class="two">欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
        <strong>HELLO</strong>
    </div>
    <a href="http://baidu.com" class="the">百度</a>
    <p class="for">你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            let num = $('.one b').siblings()
            console.log(num)
        })
    </script>
</body>

</html>
```

# 克隆节点

**加true为深克隆，加flase为浅克隆**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b class="two">欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
        <strong>HELLO</strong>
    </div>
    <a href="http://baidu.com" class="the">百度</a>
    <p class="for">你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            $('.two').append($('.the').clone())
        })
    </script>
</body>

</html>
```

# 操作CSS样式

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .one {
            width: 70px;
            height: 100px;
            background-color: aqua;
        }
    </style>
</head>

<body>
    <button>点击</button>
    <b class="two">欢迎光临</b>
    <div class="one">
        <span>谢谢惠顾</span>
        <b>再见</b>
        <strong>HELLO</strong>
    </div>
    <a href="http://baidu.com" class="the">百度</a>
    <p class="for">你好</p>
    <script src="./lib/jquery-3.4.1.min.js"></script>
    <script>
        // 给button添加点击事件
        $('button').click(function () {
            $('.for').css({
                'width':'100',
                'height':'100',
                'backgroundColor':'green'
            })
        })
    </script>
</body>

</html>
```

