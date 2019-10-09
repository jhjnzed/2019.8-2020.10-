
// 需求: 求1!+2!+3!+...+10!的和

// 分析   阶乘  比如 3= 1x2x3    4= 1x2x3x4  需要循环10次



var jie = 1;
for (var i = 1; i <= 3; i++) {
    jie = jie * i;
}
console.log(jie); // 当算3的阶乘的时候   1x2x3  = 6

var sum = 0  
for(k =1;k<=10;k++){   // 因为要计算10！

    var jie =1;
  for(i=1;i<=k;i++){    

   jie*=i;
  }
  sum+=jie
}console.log(sum)

