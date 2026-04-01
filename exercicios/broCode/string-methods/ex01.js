// string methods = allow you to manipulate and work with text (strings)



let primeiroNome = "Igor"
/*
    primeiroNome.charAt(0) = vai mostrar qual a primeira letra da string iniciando com 0

    primeiroNome.indexOf('I') = vai mostrar qual posição está a letra, começando com 0

    primeiroNome.lastIndexOf('o') = vai mostrar a posição da ultima letra que pesquisar, (no caso de ter duas)

    primeiroNome.length = vai mostrar quantas letrar tem na string, iniciando pelo 1 

    primeiroNome.trim() = vai mostrar a string sem espaços em branco, tabulações e quebras de linha no inicio e final de uma string.
    
    primeiroNome.toUpperCase() = transforma todas as letras em maiúsculas

    primeiroNome.toLowerCase() = transforma todas as letras em minúsculas

    primeiroNome.repet(x) = vai repitir a string quantas vezes colocarmos dentro dos parenteses

    primeiroNome.startsWith(' ') = mostra um resultado booleano, e significa: primeiroNome.começaCom('espaço em branco') = false
    primeiroNome.endsWith(' ') = mostra um resultado booleano, verifica se a string tem algum caractere especifico.
    primeiroNome.includes(' ') = da um resultado booleano, se uma string possui algum caractere especifico ou não. 
*/

// console.log(primeiroNome.charAt(0))
// console.log(primeiroNome.indexOf("o"))
// console.log(primeiroNome.lastIndexOf('o'))

/* primeiroNome = primeiroNome.trim()
console.log(primeiroNome) */

// console.log(primeiroNome.toUpperCase())
// console.log(primeiroNome.repeat(2))
// console.log(primeiroNome.startsWith(' '))
// console.log(primeiroNome.endsWith( ' ' ))
// console.log(primeiroNome.includes(' '))

/*
    let numeroTell = '(11)96720-1116'
    console.log(numeroTell)
    numeroTell = numeroTell.replaceAll("-", "").replaceAll("(", "").replaceAll(")", "")
    console.log(numeroTell) 
*/

let numeroTell = '1196720-1116'
console.log(numeroTell)
numeroTell = numeroTell.padStart(13, "(").padEnd(14, ")")
console.log(numeroTell)
