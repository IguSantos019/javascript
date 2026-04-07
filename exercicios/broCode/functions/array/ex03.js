// spread operator = (...) - allow an iterable such as an array or string to be expanded into separate elements (unpacks the elements)

// O operador spread (...) permite que um iterável, como um array ou uma string, seja expandido em elementos separados (desempacota os elementos)

/*
    let numbers = [1, 2, 3, 4, 5]
    let maximum = Math.max(...numbers)
    let minimum = Math.min(...numbers)
    console.log(numbers)
    console.log(maximum)
    console.log(minimum)
*/

/*
    let username = 'IguCheroso'
    let letters = [...username].join('-')

    console.log(username)
    console.log(letters)
*/

let fruits = ['apple', 'banana', 'mango', 'pineapple']
let vegetables = ['carrots', 'celery', 'potatoes']

let foods = [...fruits, ...vegetables]

console.log(fruits)
console.log(foods)