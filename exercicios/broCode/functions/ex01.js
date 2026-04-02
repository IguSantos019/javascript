// function = A section of reusable code.
//            Declare code once, use it whenever you want
//          Call the function to extecute that code

// Função = um trecho de código reutilizável. Declare o código uma vez e use-o sempre que quiser. Chame a função para executar esse código.

/*
    function musicaParabens(nome, idade){
        console.log('Parabéns pra você')
        console.log('Nesta data querida')
        console.log('Muitas felicidades, muitos anos de vida!')
        console.log(`Parabéns ${nome}`)
        console.log(`Você está fazendo ${idade} anos!`)
    }

    musicaParabens("Igor", 25)
*/
/*
    function add(x, y) {
        let result = x + y
        return result
    }

    let soma = add(2, 3)
    console.log(soma)
    console.log(add(2, 3))
*/

function add(x, y){
    return x + y
}
console.log(add(2, 3))

function subtract(x, y) {
    return x - y
}
console.log(subtract(2, 3))

function multiply(x, y){
    return x * y
}
console.log(multiply(2, 3))

function divide(x, y){
    return x / y
}
console.log(divide(2, 3))
/*
function imparouPar(number){
    if(number % 2 === 0){
        console.log('Par')
    }else {
        console.log('Impar')
    }
} */

function imparouPar(number){
    return number % 2 == 0 ? console.log('Par') : console.log('Impar')
}
imparouPar(1)

function isValidEmail(email){
    /*
    if(email.includes("@")){
        console.log("Email válido")
        return true
    }else {
        console.log("Email inválido")
        return false
    }*/
    return email.includes("@") ? true : false

}
isValidEmail("bro@fake.com")
isValidEmail("ElonMusk.com")
isValidEmail("Zuckerborg@meta.com")
console.log(isValidEmail("brofake.com"))
