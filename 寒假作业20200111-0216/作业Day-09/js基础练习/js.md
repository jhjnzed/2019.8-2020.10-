## js编程题

1. 根据要求完成以下操作

   ```
   1 ） var  a  =  1 ， 如果（a > b ）{ 控制台，b  =  1 
      。log （a > b ）; } else { 控制台。log （a > b ）; } //将上述代码转换为三元运算符，并说明if和else里面的相同代码块有什么不同？//答：console 。log （a > b？true：false ）;    
            
        
            
      
   
   
     
   
   2 ） var  a  =  10 ，
         b  =  11 ，
         c  =  [ 0 ] 
     if  （a  >  b  ||  c ） { 
         控制台。log （a  >  b  ||  c ）; 
     }  else  { 
         控制台。日志（假）; 
     } 
   //将上述代码转换为三元运算符，并解释打印结果
   //答：
   console 。日志（a  >  b ||  c？c：错误）;
   ```

2. 使用`if分支`实现判断一个成绩的段位`【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】`

   ```
   var  等级 =  96.5 ; 
   如果 （年级 > = 90 ） { 
       控制台。log （'A' ）; 
   }  else  if  （num > = 80 ） { 
       控制台。log （'B' ）; 
   }  else  if  （num > = 70 ） { 
       控制台。log （'C' ）; 
   }  else  if  （num> = 60 ） { 
       控制台。日志（'D' ）; 
   }  else  { 
       控制台。log （'E' ）; 
   }
   ```

3. 使用`switch`分支实现判断一个成绩的段位`【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】`

   ```
   var  等级 =  96.5 ; 
   var  g  =  parseInt （等级 / 10 ）; 
   开关 （g ） { 
       情况 10：
        情况 9：
            控制台。log （'A' ）; 
           休息; 
       案例 8：
            控制台。log （'B' ）; 
           休息; 
       案例 8：
            控制台。日志（'c' ）; 
           休息; 
       案例 6：
            控制台。日志（'D' ）; 
           休息; 
       默认值：
            控制台。log （'E' ）; 
           休息; 
   }
   ```

4. 使用`if分支`通过用户输入的年龄判断是其中年龄段的人（儿童：年龄＜14；青少年：14 <=年龄＜24；青年：24 <年龄＜40；中年：40 ＜=年龄＜60；老年：年龄> = 60），

   ```
   var  age  =  提示（'请输入您的年龄' ）; 
   如果 （年龄 > = 60 ） { 
       alert （'您现在属于老年' ）; 
   }  else  if  （age > = 40 ） { 
       alert （'您现在属于中年' ）; 
   }  else  if  （age > = 24 ） { 
       alert （'您现在属于青年' ）; 
   }  else  if  （age > = 14） { 
       alert （'您现在属于青少年' ）; 
   }  否则， 如果 （年龄 <  14  &&  年龄 >  0 ） { 
       alert （'您现在属于儿童' ）; 
   }  else  { 
       alert （'输入有误' ）; 
   }
   ```

5. 获取当前时间，判断今年是否为闰年（判断今年是否为闰年；能够被400整除或被4整除但不能被100整除）

   ```
   var  date  =  new  Date （）; 
   var  year  =  date 。getFullYear （）; 
   var  month  =  date 。getMonth （） +  1 ; 
   var  date  =  date 。getDate （）; 
   var  hours  =  date 。getHours （）; 
   var  分钟 =  日期。getMinutes （）; 
   var  seconds  =  date 。getSeconds （）；
   var  arr  =  [ '星期日' ， '星期一' ， '星期二' ， '星期三' ， '星期四' ， '星期五' ， '星期六' ] ；
   var  day  =  arr [ 日期。getDay （）] ; 
   如果 （年％400  ==  0  ||  （年％100！= 0 &&  年％4  ==  0 ）） { 
   警报（'现在是$ { 年} - $ { 月} - $ { 日期}  $ { 小时}：$ { 分钟}：$ { 秒}  $ { 日}今年是闰年` ）; 
   }  else  { 
   alert （`现在是$ { year } - $ { month } - $ {日期}  $ { 小时}： $ { 分钟}： $ { 秒}  $ { 日}今年是平年`）; 
   }
   ```


1. 
   ```js
   js编程题
   根据要求完成下面操作
   
   1) var a = 1, b = 1
      if (a > b) {
          console.log(a > b);
      } else {
          console.log(a > b);
      }
   // 将上述代码转换为三元运算符，并说明if和else里面的相同代码块有什么不同？
   // 答：
   console.log(a > b ? true : false);
   
   2) var a = 10,
         b = 11,
         c = [0]
     if (a > b || c) {
         console.log(a > b || c);
     } else {
         console.log(false);
     }
   // 将上述代码转换为三元运算符，并解释说明打印结果
   // 答：
   console.log(a > b || c ? c : false);
   使用 if分支 实现判断一个成绩的段位【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】
   
   var grade = 96.5;
   if (grade >= 90) {
       console.log('A');
   } else if (num >= 80) {
       console.log('B');
   } else if (num >= 70) {
       console.log('C');
   } else if (num >= 60) {
       console.log('D');
   } else {
       console.log('E');
   }
   使用 switch 分支实现判断一个成绩的段位【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】
   
   var grade = 96.5;
   var g = parseInt(grade / 10);
   switch (g) {
       case 10:
       case 9:
           console.log('A');
           break;
       case 8:
           console.log('B');
           break;
       case 8:
           console.log('c');
           break;
       case 6:
           console.log('D');
           break;
       default:
           console.log('E');
           break;
   }
   使用if分支通过用户输入的年龄判断是哪个年龄段的人（儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），
   
   var age = prompt('请输入您的年龄');
   if (age >= 60) {
       alert('您现在属于老年');
   } else if (age >= 40) {
       alert('您现在属于中年');
   } else if (age >= 24) {
       alert('您现在属于青年');
   } else if (age >= 14) {
       alert('您现在属于青少年');
   } else if (age < 14 && age > 0) {
       alert('您现在属于儿童');
   } else {
       alert('输入有误');
   }
   获取当前时间，判断今年是否为闰年(判断今年是否为闰年； 能被400整除 或 被4整除但不能被100整除)
   
   var date = new Date();
   var year = date.getFullYear();
   var month = date.getMonth() + 1;
   var dates = date.getDate();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();
   var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
   var day = arr[date.getDay()];
   if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
   alert(`现在是${year}-${month}-${dates} ${hours}:${minutes}:${seconds} ${day} 今年是闰年`);
   } else {
   alert(`现在是${year}-${month}-${dates} ${hours}:${minutes}:${seconds} ${day} 今年是平年`);
   } 
   ```