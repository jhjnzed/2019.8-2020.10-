// 9. 分数转换,给一个分数，判定等级。大于
// 等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E

var x = 99 , y

    if(x>=90)
    {
       y="A" 
    }
    else if(90>x && x>=80)
    {
       y= 'B'
    }
    else if(80>x && x>=70)
    {
     y='C' 
    }
    else if(70>x && x>=60)
    {
    y='D' 
    }
    else if(x<60)
    {
    y='E'
    }
   

   console.log(y)