Number(true)  // ?            1
Number(false) // ?            0
Number(" ") // ?              0 
Number([]) //?                   0   
Number(['1', '2']) //?            NaN
Number([1]) // ?             1
Number({})   //?              NaN
Number({ a: 1 }) // ?         NaN
Number("3.14") //?           NaN
Number(null) // ?                 0
Number(undefined) //?         NaN
Number("12456aaaa") //?         NaN
String({}) // ?               [object Object]
String([]) // ?               [object Object]
String(123) //?              字符串的123 
String(false) //?                    字符串的false  
String(null) //?                在字符串中不能用
String(undefined) //?               在字符串不能用
undefined.toString() //?            字符串的undefined
null.toString()  //?              字符串的null
Boolean(0) // ?                  false
Boolean("") //?               false
Boolean(undefined) //?           false
Boolean(null) //?              false
Boolean(NaN) //?                false   
Boolean({}) // ?                true
Boolean([])  // ?              true