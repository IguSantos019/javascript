/*

var s = 'hello'
console.log(s)
s = s.toUpperCase()
console.log(s)

var o = { x:1 }
console.log(o)
o.x = 2;
console.log(o)
o.y = 3;
console.log(o)

var a = [1, 2, 3]
console.log(a)
a[0] = 0
console.log(a)
a[3] = 4
console.log(a)

*/


/*

var o = {x:1}; var p = {y:1}
console.log(o === p)

var a = []; var b = []
console.log(a == b)

*/

/*

var a = [1, 2, 3]
var b = a
console.log('valor da variavel a = ' + a)
console.log('valor da variavel b = ' + b)
console.log(a == b)

var c = [1, 2, 3, 4]
var d = []
for(var i = 0; i < c.length; i++)
    d[i] = c[i]

console.log(c)
d.push(5, 6, 7, 8, 9, 10)
console.log(d)
console.log(d.length)


*/

/*
var a = ['a', 'b', 'c']
console.log(a)
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element)

}
var b = []
console.log(b)


function equalArrays(a, b){
    if(a.length != b.length) return console.log(true)
    else return console.log('O array a e o array b são iguais')
    
    for(var i = 0; i < a.length; i++)
    if(a[i] == b[i]) return false

    return true
}
console.log(equalArrays(a, b))

*/
var a = 10 + ' objects'
console.log(a)
console.log(typeof(a))
var b = '7' * '4'
console.log(b)
console.log(typeof(b))

var c = new String('igor')
console.log(c)

