# DOM第十四天

## 动画封装

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        div {
            position: absolute;
            width: 200px;
            height: 200px;
            background-color: aqua;
            top: 100px;
        }
    </style>
</head>

<body>
    <button>点击移动</button>
    <div></div>
    <script>
        // 动画原理：获取原位置》在盒子当前位置上加上步长（每次移动的距离）》重复步长（计时器）》加一个停止计时器执行的条件
        // 获取元素
        let ondiv = document.querySelector('div')
        let onbut = document.querySelector('button')
        // 添加点击事件
        onbut.onclick = function () {
            // 设定定时器
            let time = setInterval(function () {
                // 让div开始移动
                ondiv.style.left = ondiv.offsetLeft + 1 + "px"
                // 判断移动距离是否大于500像素，如果大于就清除定时器
                if (ondiv.offsetLeft >= 500) {
                    clearInterval(time)
                }
            }, 10)
        }
    </script>
</body>

</html>
```

### 缓动动画封装

#### 简单动画函数封装

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        div {
            position: absolute;
            width: 200px;
            height: 200px;
            background-color: aqua;
            top: 100px;
        }
    </style>
</head>

<body>
    <button>点击移动</button>
    <div></div>
    <script>
        // 获取元素
        let ondiv = document.querySelector('div')
        let onbut = document.querySelector('button')
        onbut.onclick = function () {
            animate(ondiv,500)
        }

        function animate(element,target) {
            let time = setInterval(function () {
                if(element.offsetLeft >= target) {
                    clearInterval(time)
                }
                element.style.left = element.offsetLeft + 1 + "px"
            },20)
        }
    </script>
</body>

</html>
```

#### 缓动动画函数封装（匀速运动）



#### 缓动动画函数封装（变速运动）

公式：（目标值 - 现在位置）/ 10 == 每次移动的步长

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        div {
            position: absolute;
            width: 200px;
            height: 200px;
            background-color: aqua;
            top: 100px;
        }
    </style>
</head>

<body>
    <button>点击移动</button>
    <div></div>
    <script>
        // 获取元素
        let ondiv = document.querySelector('div')
        let onbut = document.querySelector('button')
        onbut.onclick = function () {
            aniament(ondiv,800)
        }
        function aniament(element,target) {
            clearInterval(element.timer)
            element.timer = setInterval(function () {
                let sen = (target - element.offsetLeft) / 10
                sen = sen > 0?Math.ceil(sen):Math.ceil(sen)
                if(element.offsetLeft == target) {
                    clearInterval(element.timer)
                }
                element.style.left = element.offsetLeft + sen + "px"
            },50)

        }
    </script>
</body> 

</html>
```

#### 封装变速运动的动画函数



#### 封装变速动画的任何函数



#### 封装变速运动的动画函数——多个属性



#### 封装变速运动的动画函数——多个属性——回调函数

##### 回调函数：

一个函数a作为另一个函数b的参数，那么这个函数a就是b的回调函数

如果a是回调函数，b就称为主函数，主函数一定先执行。回调函数是等主函数执行完毕回调函数才执行





#### 封装变速运动的动画函数——多个属性——回调函数——透明度



## 获取元素计算后的样式（可以获取任何元素样式属性值）

#### IE9+

属性值 = window.getComputedStyle(元素，伪元素(没有就写null)).属性名

#### IE8

属性值 = 元素.currentStyle.属性名











