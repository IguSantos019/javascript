
// função para saber qual é o maior número
/*
function maiorNum(n1, n2){
    
    
    let maior = n1 + n2
    maior = Math.max(n1, n2)
    return maior
}
let maiorNumero = maiorNum(9, 27)
console.log(maiorNumero)

*/

// função que diz se uma "foto" é maior verticalmente ou horizontalmente
/*
function EstaHorizontal(altura, largura){
    if(altura === largura) return 'A foto tem o mesmo tamanho horizontalmente e verticalmente'
    if (altura > largura) return 'A foto é verticalmente maior'
    else return 'A foto é horizontalmente maior'
    
}
var altura = 250
var largura = 250
let horiOuVert = EstaHorizontal(altura, largura)
console.log(`${horiOuVert}, a altura da imagem é ${altura}px e a largura é ${largura}px.`)
*/

// fução que verifica se um número é impar ou par
/*
function imparOupar(number){
    if (number % 2 == 0) return `O ${number} é par!`
    else return `O número ${number} é impar!`
}
let result = imparOupar(8)

console.log(result)

*/

// verificação se o número é divisivel por 3 ou e por 5
/*
function fizzBuzz(number){
    if (typeof number !== 'number') return 'Este valor é inválido!'
    if (number % 3 == 0 && number % 5 == 0) return 'FizzBuzz'
    if(number % 3 == 0) return 'Fizz'
    if (number % 5 == 0) return 'Buzz'
    return number 
}

let result = fizzBuzz(7)
console.log(result)
*/

// Apelidos para cada quantidade de tacadas necessárias para acertar no golf
/*
const apelidos = [
    'Hole-in-one',
    'Eagle',
    'Birdie',
    'Par',
    'Bogey',
    'Double Bogey',
    'Go home'
]

function golfScore(par, strokes){
    if (strokes === 1 ) return apelidos[0]
    if(strokes <= par -2) return apelidos[1]
    if(strokes <= par -1) return apelidos[2]
    if(strokes === par) return apelidos[3]
    if(strokes === par + 1) return apelidos[4]
    if(strokes === par + 2) return apelidos[5]
    if(strokes >= par + 3) return apelidos[6]
    
}

let result = golfScore(4, 8)
console.log(result)
*/

/*
function radar60km(speed){
    
    if(speed === 60) return `A sua velocidade é de ${speed}km/h, está dentro do limite`
    if (speed === 65) return `Você está na tolerância do limite (65km/h)`
    if(speed >= 66 & speed <= 70) return `Você ganhou 1 ponto na carteira`
    if(speed >= 71 & speed <= 75) return `Você ganhou 2 pontos na carteira`
    if(speed >= 76 & speed <= 80) return `Você ganhou 3 pontos na carteira`
    if(speed >= 71 & speed <= 85) return `Você ganhou 4 pontos na carteira`
    if(speed >= 86 & speed <= 90 ) return `Você ganhou 5 pontos na carteira`
    if(speed >= 91) return `CNH SUSPENSA!`
}
let result = radar60km(65)
console.log(result)

*/

//exercicio de pontos e velocidades de ruas
/*
function radar60km(speed){
    const limitSpeed = 60
    const kmPerPoint = 5
    if(speed <= limitSpeed) {
        console.log(`A sua velocidade é de ${speed}km/h, está dentro do limite`)
    }else if (speed == limitSpeed + kmPerPoint){
        console.log(`Você está na tolerância do limite (65km/h)`)
    }else{
        let points = Math.floor((speed - limitSpeed) / kmPerPoint - 0.1)
        
        if(points > 5){
        console.log('CNH SUSPENSA!')
        }
            if (points == 1 ){
                console.log('Point: ' + points)
            }else {
                console.log('Points: ' + points)
            }
    }
}
radar60km(90)

*/

//função que verifica quantas strings tem em um array
/*
const stringsArray = ['igu', 2, true, 'silva', false, 'Tainara']
console.log(stringsArray)

function howManyStrings(stringsArray){
    let contStrings = 0;

    for(let strings of stringsArray)
        if(typeof strings === 'string'){
            contStrings++
            
        }
    return contStrings
    
   
}
let result = howManyStrings(stringsArray)
console.log(result)
*/

//função com for loop in
/*
const countries = {
    name: 'Japan',
    population: 125,
    capital: 'Tokyo',
    economyPosition: 3
}

//for(let strings in countries)
   // console.log(strings, countries[strings

function showOnlyStrings(obj){
    for(let strings in obj)
        if(typeof obj[strings] === 'string'){
            console.log(strings, obj[strings])
        }
        
}
showOnlyStrings(countries)
*/
    
//soma dos multiplos de 3 e 5
/*
function somaMultiplos(limitNum){
    let sum = 0
    for(let c = 0; c <= limitNum; c++){
        if(c % 3 == 0 || c % 5 == 0){
            sum += c
        }
        
    }
    return sum

}
console.log(somaMultiplos(10))
*/

/*
const marks = [50, 75, 100]

function calculateAverage(array){
    let sumNotes = 0
    for(let note of array)
        sumNotes += note
    return sumNotes / array.length
}
function calculateGrade(array){
    const average = calculateAverage(array)

    if(average < 60) return 'E'
    if(average < 70) return 'D'
    if(average < 80) return 'C'
    if(average < 90) return 'B'
    return 'A'
        
}

console.log(calculateGrade(marks))
*/

//nexted loop com estrelas
/*
function showStars(rows){
    
    for(let c = 1; c <= rows; c++){
        let asteristico = '';
        for(let i = 0; i < c; i++)
            asteristico += '*'
            console.log(asteristico)
    }

}
showStars(5)

function showStars(rows){
    let asteristico = ''
    for(let c = 1; c <= rows; c++){
        asteristico += '*'
        console.log(asteristico)
    }
}

*/


const arr = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]



function multipleAll(arr){
    let result = 1;
    
    for(let c = 0; c < arr.length; c++){
        for(let i = 0; i < arr[c].length; i++){
            result *= arr[c][i];
        }
    }
    return result;
}
console.log(multipleAll(arr))