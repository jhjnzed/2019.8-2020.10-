// 5.	5文钱可以买一只公鸡，3文钱可以买一只母鸡，1文钱可以买3只雏鸡。
// 现在用100文钱买100只鸡，那么各有公鸡、母鸡、雏鸡多少只？

//分析5￥能买一只公鸡    3￥能买一只母鸡   1￥ 能买3只小鸡   现在用100￥买100只鸡  
//求怎样分配  公鸡 a  母鸡b 小鸡  100-a-b=c

//买100￥只公鸡要20只
for(var a=0;a<=20;a++){
    //母鸡要33只
 for(var b=0;b<=33;b++){
     var c =100-a-b;     //小鸡等于减去
     if((a+b+c==100)&&(5*a+3*b+c/3==100)){
         console.log("公鸡："+a+"母鸡："+b+"小鸡："+c+"只")
     }
 }
}