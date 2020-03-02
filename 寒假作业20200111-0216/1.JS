 var arr= ["张三丰","李晓阳","大张","刘张伟","张章"]
 function name(arr){
   for(var i=0;i<arr.lenght;i++){
     if(arr[i][0]=='张'){
       console.log(arr[i])
     }
   }
 }
 name(arr)