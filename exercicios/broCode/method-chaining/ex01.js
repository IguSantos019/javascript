// Method Chaining = calling one method after another in one continous line of code

// Encadeamento de métodos = chamar um método após o outro em uma única linha de código contínua.

let nomeCompleto = window.prompt('Digite seu nome completo')

// -------- NO METHOD CHAINING ----------

/*
nomeCompleto = nomeCompleto.trim()
let primMai = nomeCompleto.charAt(0)
primMai = primMai.toUpperCase()

let extraChars = nomeCompleto.slice(1)
extraChars = extraChars.toLowerCase()

nomeCompleto = primMai + extraChars
console.log(nomeCompleto) */

// -------- METHOD CHAINING ------------

nomeCompleto = nomeCompleto.trim().charAt(0).toUpperCase() + nomeCompleto.trim().slice(1).toLowerCase()
let arrayNome = nomeCompleto.split(" ")
let primeiroNome = arrayNome[0]
let sobrenome = arrayNome[1]
sobrenome = sobrenome.trim().charAt(0).toUpperCase() + sobrenome.trim().slice(1).toLowerCase()
let mostrartudo = arrayNome.join(" ")
console.log(nomeCompleto)
console.log(primeiroNome)
console.log(sobrenome)
