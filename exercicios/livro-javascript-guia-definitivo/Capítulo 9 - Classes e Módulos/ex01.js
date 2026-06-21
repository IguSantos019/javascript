/*
const obj = {
    person1: ['Igor', 22, 'Garçom'],
    person2: ['Tainara', 22, 'Desempregada'],
    person3: ['Maria Eduarda', 18, 'Home Office']
}
for(var i = 0; i < obj.person1.length; i++){
    console.log(obj.person1[i])
}
//console.log(obj.person1[0])
console.log('Uma forma usando forEach()');

obj.person1.forEach(itens => {
    console.log(itens)
});
console.log("----------");

Object.values(obj).forEach((itens, index) => {
    itens.forEach(itens => console.log(itens))
})

*/


class Carro{
    constructor (modelo, ano){
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfo(){
        console.log(`Modelo: ${this.modelo}, ano: ${this.ano}`);
    }
}
const carro1 = new Carro('Ferrari Spider', 2010);
const carro2 = new Carro('Fusca', 1986, 'Azul')
carro1.exibirInfo()
carro2.exibirInfo()

function Carros(modelo, cor, ano){
    this.cor = cor;
    this.modelo = modelo;
    this.ano = ano;
}
Carros.prototype = {
    constructor: Carros,
    
    exibirInfo: function(){
        console.log(`Aqui temos um ${this.modelo} de cor ${this.cor} do ano de ${this.ano}`)
    }
}
const carro3 = new Carros('Celta', 'Preto', 2004)

carro3.exibirInfo()




class FazerContas{
    constructor(numero1, numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    exibirSoma(){
        var result = 0;
        result = this.numero1 + this.numero2
        console.log(`A soma entre ${this.numero1} e ${this.numero2} é igual a ${result}`)
    }
    exibirMultiplicacao(){
        if(isNaN(this.numero1) || isNaN(this.numero2)){
            throw Error('Para somar precisa ser números')
        }else{
            var result = 0;
            result = this.numero1 * this.numero2;
            console.log(`A multiplicação entre ${this.numero1} e ${this.numero2} é igual a ${result}`)
        }
    }
}

const calc1 = new FazerContas(5, 5);
calc1.exibirMultiplicacao();
const calc2 = new FazerContas(2, 5);
calc2.exibirMultiplicacao();



function DoCalcs(number1, number2){
    this.number1 = number1;
    this.number2 = number2;
    function validationNumber(){
        if(isNaN(this.number1) || isNaN(this.number2))
            throw Error('Precisa ser um número para fazer qualquer cálculo')
    }
}
DoCalcs.prototype = {
    exibirSub(){
        
        let result = 0;
        result = this.number1 - this.number2;
        //console.log(`A subtração entre ${this.number1} e ${this.number2} é igual a ${result}`);
        return console.log(result)
    },
    
}
const calc3 = new DoCalcs(10, 1);
calc3.exibirSub()

DoCalcs.prototype.exibirDiv = function(){
    let result = 0;
    result = this.number1 / this.number2;
    
    return result;
}
const calc4 = new DoCalcs(10, 5);
console.log(calc4.exibirDiv())



