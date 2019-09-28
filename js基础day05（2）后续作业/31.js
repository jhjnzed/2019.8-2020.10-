// 31.解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出101到200之间的整数一共有多少个3。


var sum=0;
for (var  i = 101; i < 200; i++) {
        var ge=i%10;
        var shi=(i-ge)/10%10;
       if (ge==3&&shi==3) {
           sum+=2
       }else if(ge==3||shi==3){
        sum+=1
       }
    }
console.log('101到200之间的整数一共有'+sum+'个');
