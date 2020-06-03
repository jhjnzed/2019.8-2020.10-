function ge(a, b, callback) {
    let sum = a + b;
    callback(sum)
}
getn(1, 2, function (result) {
    console.log(result);

})

function pg(callback) {
    callback()
}

ppp(function () {
    console.log(421)
})