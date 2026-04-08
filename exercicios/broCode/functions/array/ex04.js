// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// Os parâmetros rest = (...rest) permitem que uma função trabalhe com um número variável de argumentos, agrupando-os em um array.

// spread = expande um array em elementos separados.
// rest = agrupa elementos separados em um array.

/*

const food1 = 'pizza'
const food2 = 'hamburguer'
const food3 = 'hotdog'
const food4 = 'sushi'
const food5 = 'ramen'
function openFridge(...foods){
    console.log(...foods)
}

openFridge(food1, food2, food3, food4, food5)
*/
/*
function getFood(...foods){
    return foods
}

const foods = getFood(food1, food2, food3, food4, food5)
console.log(...foods)
*/

/*

function sum(...numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result
}
let result = 0
function pegarMedia(...numbers){
    
    for(let number of numbers){
        result += number
    }
    return result / numbers.length
}
const total = sum(1, 2, 8, 4)
const media = pegarMedia(1, 2, 8, 4)

console.log(`Seu total é R$${total} e a média dos números é R$${media}`)

*/
function combineStrings(...strings){
    return strings.join(' ')
}

const fullname = combineStrings("Mr.", 'Spongebob', 'Squarepants', 'III')

console.log(fullname)

