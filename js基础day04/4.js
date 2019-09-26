var a = 1; var b = ++a + ++a;   console.log(b);  //  ？      5     ++a=2 +   ++a=3    =  2+3 =5  
var a = 1; var b = a++ + ++a;   console.log(b);  // ？       4     a++=1（但是用了之后就会+1）  ++a = 3
var a = 1; var b = a++ + a++;   console.log(b);  // ？       3      同上 a++=1   a++ =2    1+2=3
var a = 1; var b = ++a + a++;   console.log(b);  // ？       4    ++a =2    +     a++=2  =4