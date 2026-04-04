// array = a variable like structure that can hold more tha 1 value

// array = uma estrutura semelhante a uma variável que pode ter mais do que 1 valor

let fruits = ['apple', 'orange', 'banana', 'pineapple', 'watermellon', 'lemon'];

// fruits.push('coconut') = adciciona um valor a ultima posição
//fruits.pop() = exclui o ultimo valor
//fruits.unshift('mango') = adciona um valor a primeira posição 
//fruits.shift() = exclui o primeiro valor e o segundo valor ocupa o primeiro
//fruits.sort() = ordena os valores em ordem crescente ou alfabética
//fruits.sort().reverse = ordena os valores ao contrário

/*
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
*/

//let numOfFruits = fruits.length = .length vai contar quantas posiçoes temos no array

//let index = fruits.indexOf('mango') = indexOf() vai mostrar qual posição está o item procurado, e caso ele não exista retorna o valor -1


/*
for(let c = 0; c < fruits.length; c++){
    console.log(fruits[c])
}                                       = vai mostrar todos os valores do array
*/

/*
for(let c = fruits.length - 1; c >= 0 ; c--){
    console.log(fruits[c])
}                                      = vai mostrar todos os valores ao contrário
*/

/*
for(let fruit of fruits){
    console.log(fruit)
}                                      = shortcut para mostrar os valores sem o contador
*/