let botao = document.getElementById('botao')
let senhadiv = document.getElementById('senhadiv')



function gerarSenha(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const minusCarac = 'abcdefghijklmnopqrstuvwxyz'
    const maiusCarac = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numCarac = '0123456789'
    const simbolos = '!@#$%&'

    let caracPermit = ''
    let senha = ''

    caracPermit += includeLowercase ? minusCarac : "";
    caracPermit += includeUppercase ? maiusCarac : "";
    caracPermit += includeNumbers ? numCarac : "";
    caracPermit += includeSymbols ? simbolos : "";

    if(passwordLength <= 0){
        return `(A senha tem que ser maior que 0)`
    }


    return '';
}

let passwordLength = 6
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true


const senha = gerarSenha(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

console.log(senha)






