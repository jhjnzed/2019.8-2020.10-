// 27.求1!+2!+3!+...+10!的和

for(var i=1,sum=0;i<=10;i++){
    for(var j=1,ride=1;j<=i;j++){
        ride*=j;
    }
 
    sum+=ride;
}
console.log(sum)
