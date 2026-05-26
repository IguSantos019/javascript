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

/*
var a = 10 + ' objects'
console.log(a)
console.log(typeof(a))
var b = '7' * '4'
console.log(b)
console.log(typeof(b))

var c = new String('igor')
console.log(c)

*/

//console.log(null == undefined) //true
//console.log( '0' == 0) // true
//console.log(0 == false) // true
//console.log(1 == true) // true
//console.log('0' == false) // true

//Para conversões explicitas podemos usar as funções
//Number(), String(), Boolean() e Object()

/*
console.log(Number('3'), typeof (Number('3')))
console.log(String(false) ,typeof(String(false)))
console.log(Boolean([]), typeof(Boolean([])))
console.log(Object(5), typeof(Object(3)))
console.log(Number(3).toString(), typeof(Number(3).toString()))
var soma = Number(3)+ Number(5).toString();
console.log(soma, typeof(soma))
*/

/*
console.log(typeof('x' + ''))
console.log(typeof(+'x'))
console.log(typeof(!!'x'))
*/

// Metodos: toString(), toFixed(), toExponential() e toPrecision()
/*
var n = 17
console.log(n)

console.log(binary_string = n.toString(2))
console.log(octal_string = '0' + n.toString(8))
console.log(typeof(octal_string = '0' + n.toString(8)))
console.log(hex_string = '0x' + n.toString(16))

var num = 123456.789

console.log(num.toFixed(0))
console.log(num.toFixed(2))
console.log(num.toFixed(5))
console.log(num.toExponential(1))
console.log(num.toExponential(3))
console.log(num.toPrecision(4))
console.log(num.toPrecision(7))

*/
//Transformando objeto em strings e números usando
//Operadores relacionais (< , >) de adição (+), de subtração (-))
//e de igualdade (==)

/*
var diaAgora = new Date()

console.log(diaAgora)
console.log(typeof(diaAgora))
console.log('')
console.log(diaAgora + 1)
console.log('O tipo do texto acima deixa de ser objeto e passa a ser string = typeof - ', typeof(diaAgora + 1))

console.log('')
console.log(diaAgora - 1)
console.log('O texto acima deixa de ser objeto e passa a ser um número = typeof - ' + typeof(diaAgora -1))
console.log('')

console.log(diaAgora == diaAgora.toString(),' - ' ,'Verdadeiro: conversões de string implícitas e explícitas')

console.log(diaAgora > diaAgora - 1, '-', 'Verdadeiro: ">" converte um objeto Date em número')

*/

//Declaração de variáveis
/*

for(var i = 0; i < 10; i++) //console.log(i);
for(var i = 0, j = 10; i < 10; i++, j--) console.log(i*j)
var o = 'abcdefghijklmnopqrstuvwxyz'
for(var p in o) console.log(p)
console.log(typeof p)

var i = 10
console.log(i)
i = 'ten'
console.log(i)

*/
//Variáveis globais e locais
/*
//var scope = 'global';
function checkscope(){
    var scope = 'local'
    return scope
}
//console.log(scope)
console.log(checkscope())

scope = 'global';
console.log(scope)
function checkscope2(){
    scope = 'local';
    myscope = 'local';
    return [scope, myscope]
}
console.log(checkscope2())
console.log(typeof(checkscope2()))
console.log(typeof(checkscope()))
*/

//Escopo da variável dentro de uma função que está dentro de outra função
//Retorna valores conforme o "return"
/*
var scope = 'global scope';
function checkscope(){
    var scope = 'local scope';
    //return scope - retorna o valor da variavel deste escopo
    function nested(){
        var scope = 'nested scope';
        return scope
    }
    return nested(); // retorna o valor da variavel escopo da função acima
}
console.log(checkscope())

*/

//Escopo global dentro de uma função com escopo local dentro de if e for
//Tendo a verificação de que o parâmetro da função seja um 'object'
/*
function test(o){
    var i = 12;
    if(typeof(o) == 'object'){
        var j = 11;
        for(var k = 0; k < 10; k++){
            console.log(k);
        }
        console.log(k)
    }
    console.log(j);
    console.log(i)
}
var objeto = []
test(objeto)

*/
//Testando como funciona o escopo global de uma função, aonde leva a variável para o topo da função
/*
var scope = 'global';
function f(){
    console.log(scope)
    var scope = 'local';
    
}
f()
*/

//Deleta apenas variaveis declaradas
/*
var truevar = 1;
fakevar = 0;
console.log(truevar)
console.log(delete truevar)
fakevar = 2;
//
console.log(fakevar)
console.log(delete fakevar)
this.fakevar2 = 3;
console.log(this.fakevar2)
console.log(delete this.fakevar2)

*/
/*
var geval = eval();
var x = 'global', y = 'global'

function f(){
    var x = 'local';
    eval("x += ' changed' ;");
    return x
}
function g(){
    var y = 'local';
    geval("y += ' changed' ;");
    return y
}

console.log(f(), x)
console.log(g(), y)
*/
//Tentativa de fazer eval global mal sucedida
/*
var x = 2, y = 4;
function test(x, y) {
  var x = 2,
    y = 4;
  console.log(eval("x + y")); // Chamada direta, usa o escopo local, resulta em 6
  var geval = eval; // equivalente a chamar eval no escopo global
  console.log(geval("x + y")); // Chamada indireta, usa o escopo global, lança uma exceção ReferenceError porque `x` não foi declarado
  
}
test(x, y)
*/

//Testando operador delete
/*
var objNomes = {nome1: 'Igor', nome2: 'Tainara', nome3: 'Matata'}
console.log(objNomes)
function testDelete(){
    if(objNomes.nome1 === 'Igor'){delete objNomes.nome1}
    else
    {objNomes.nome1 += ' Fodinha'}
}
testDelete()
console.log(objNomes)
console.log(objNomes.nome1)
console.log("nome1" in objNomes)
var x = {x:1, y:2}
console.log(x)
delete(x.x)
console.log(x)

*/

for(var i=0, j=10; i<=j; j--, i++){
    console.log(j,i)
}
