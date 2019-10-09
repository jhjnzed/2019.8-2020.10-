// 需求: 利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。

// 分析  定义一个三位数  这个三位数 一定在 100-999循环    分成 g s b   g^3+s^3+b^3  =  这个数







for ( i=100;i<1000;i++) {
  
     g=i % 10;

     s=parseInt(i / 10 % 10);

     b=parseInt(i / 100);

    if (g * g * g + s * s * s + b * b * b == i) {
   
        console.log(i);
    }

}






   