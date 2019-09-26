console.log ( NaN == NaN );//？          false     先把他转化为相同类型   每个NaN之前的值都不一定一样
console.log( NaN === NaN ); //？                 false            同上
console.log ( undefined == null );//？             true    ufd=未定义   null=空     未定义 和空 相似
console.log ( undefined === null );//？         false       但不是全等的
console.log ( 1 + "true" ); // ？                 1true    true变成一个字符串
console.log ( 1 + true );  //？                  2     true=1
console.log ( "abc" > "b" ); //？                false         因为a < b           
console.log ( "abc" > "aad" ); //？          true       假如 abc=123   abd= 114 
console.log ( [] == [] ); //？               false     因为每个数组 里面 的 数据都不一定是一样的    
console.log ( [] === [] ); //？                 false     同上
console.log ( [] == ! [] ); // ？            true    同上
console.log ( [] == 0 );//？                 true     因为 数组 可能 为0
console.log ( ! [] == 0 );//？              true   同上