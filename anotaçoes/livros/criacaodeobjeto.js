
var x = {nome:'Igor', idade: 24, sexo: 'Feminino'}
function sex(sex){
    if(sex === 'Masculino') { return 'Você é machão'}
    else return 'Você é machona'
}
console.log(sex(x.sexo))
console.log(x)


var y = 'Eu sou o número '
console.log(y)
console.log(typeof(y))
var s = y + (Math.random() * 25).toFixed(0)
console.log(s)

var n = '1'
console.log(typeof(n), n)
n = +n
console.log(typeof(n), n)