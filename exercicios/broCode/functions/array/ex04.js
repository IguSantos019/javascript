// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// Os parâmetros rest = (...rest) permitem que uma função trabalhe com um número variável de argumentos, agrupando-os em um array.

// spread = expande um array em elementos separados.
// rest = agrupa elementos separados em um array.


const food1 = 'pizza'
const food2 = 'hamburguer'
const food3 = 'hotdos'
const food4 = 'sushi'

function openFridge(...foods){
    console.log(foods)
}
