// string slicing = creating a substring from a portion of another string
//    String.slice(start, end)

// fatiamento de string = criar uma substring a partir de uma parte de outra string

/*
    const nomeEsobrenome = 'Igor Silva'

    let primeiroNome = nomeEsobrenome.slice(0, 4)
    let sobrenome = nomeEsobrenome.slice(5, 10)

    let primeiraLetra = nomeEsobrenome.slice(0, 1)
    let ultimaLetra = nomeEsobrenome.slice(-1)

    console.log(primeiroNome)
    console.log(sobrenome)
    console.log(primeiraLetra)
    console.log(ultimaLetra) 
*/

const nomeCompleto = "Igor Silva Santos"
console.log(nomeCompleto)
console.log(" ")


let nome = nomeCompleto.slice(0, nomeCompleto.indexOf(" "))
let sobrenome = nomeCompleto.slice(nomeCompleto.indexOf(" ") + 1, nomeCompleto.lastIndexOf(" "))
let ultimoNome = nomeCompleto.slice(nomeCompleto.lastIndexOf(" ") + 1)
console.log(nome)
console.log(sobrenome)
console.log(ultimoNome)

console.log(" ")

const email = "igu01@gmail.com"
console.log(email)
console.log(" ")

let username = email.slice(0, email.indexOf("@"))

let extensao = email.slice(email.indexOf("@"))


console.log(username)
console.log(extensao)