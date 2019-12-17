# less
Less是一门CSS预处理语言，它扩展了CSS语言，增加了变量，Mixin，函数等特性，使CSS更易维护和扩展。

更少可以运行在Node或浏览器端。

## less的变量
 
 语法: @变量名: 变量值; 
 @link-color:        #428bca;

 作用：变量使您可以从一个位置控制这些值，从而使代码易于维护：



 ## 可变插值
 上面的示例着重于使用变量来控制CSS规则中的值，但它们也可以在其他地方使用，例如选择器名称，属性名称，URL和@import语句。

 @my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
编译为：

.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}


## 性质
@property: color;

.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}
编译为：

.widget {
  color: #0ee;
  background-color: #999;
}

两次定义变量时，使用变量的最后定义，从当前作用域向上搜索。这类似于css本身，其中css定义中的最后一个属性用于确定值。


## 父母选择者
&操作者表示的父选择嵌套规则

a {
  color: blue;
  &:hover {
    color: green;
  }
}
结果是：

a {
  color: blue;
}

a:hover {
  color: green;
}

&代表所有父选择器（而不仅仅是最接近的祖先）



## 嵌套

1) &符号，表示的是上1级选择器的名字。
 #header{
        &:after{ //注意：不能省略&，如果省略会给每一个子元素添加一个after。
          content:"Less is more!";
        }
        .title{
          font-weight:bold;
        }
        &_content{//理解方式：直接把 & 替换成 #header
          margin:20px;
        }
      }
      /* 生成的 CSS */
      #header::after{
        content:"Less is more!";
      }
      #header .title{ //嵌套了
        font-weight:bold;
      }
      #header_content{//没有嵌套！
          margin:20px;
      }
      





## Less注释

Less的注释语法类似于js和sass一样

//单行注释

/* ---*/多行注释
## 属性的拼接语法

+代表的是逗号，+_代表的是空格。

## 继承

extend是less的一个伪类。它可以继承所匹配声明中的全部样式。

## 导入 
在less文件中可以引入其他的less文件。使用关键字import。

①　导入less文件，可以省略后缀。

import “index.less”;
import “index”;
②　@import可以放在任何地方

③　reference

引入一个less文件，但不会编译它。

@import (reference) “bootstrap.less”;
#wrap:extend(.navbar all){}
@import (reference)使用导入外部文件，只能在less中使用，主要是为了继承和方法，最终编译的时候里面的内容不会产生css。






















### sass与less

1、Less在JS上运行，Sass在Ruby上使用。
2、编写变量的方式不同。
3、在Less中，仅允许循环数值。
4、Sass有Compass，Less有Preboot