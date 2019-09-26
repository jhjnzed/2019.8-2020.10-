console.log ( NaN == NaN );//？          false     NaN跟任何都不相等包括自身
console.log( NaN === NaN ); //？                 false            同上
console.log ( undefined == null );//？             true    ufd=未定义   null=空     未定义 和空 相似
console.log ( undefined === null );//？         false       但不是全等的
console.log ( 1 + "true" ); // ？                 1true    true变成一个字符串
console.log ( 1 + true );  //？                  2     true=1
console.log ( "abc" > "b" ); //？                false         因为a < b           
console.log ( "abc" > "aad" ); //？          true       假如 abc=123   abd= 114 

当 复杂类型在 == 时候  就是  false
复杂类型数据在转布尔值时候就是true
当等号进行比较时候，如果有一方是布尔值，会把布尔值先转换为数字
当进行等号比较时候，如果有一方是数字，那么另一方也要转数字
console.log ( [] == [] ); //？     
console.log ( [] === [] ); //？                 false     同上
console.log ( [] == ! [] ); // ？            true    同上
console.log ( [] == 0 );//？                 true     因为 数组 可能 为0
console.log ( ! [] == 0 );//？              true   同上