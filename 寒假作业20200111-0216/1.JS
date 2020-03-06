function one(string) {
var u = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var i = 0; i < string.length; i++) {
for (var o = 0; o < u.length; o++) {
if (string[i] == u[o]) {
break
}
}
}
var y = string.slice(0, i)
var p = Number(string.slice(i, string.length))
p = p++
string = String(y + p)
console.log(string)

}
var string = "a7"
one(string)