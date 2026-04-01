const minNum = 1
const maxNum = 100
const randomNum = Math.floor(Math.random() * maxNum - minNum + 1) + minNum
console.log(randomNum)
let tentativas = 0
let pergunta;
let ocorrendo = true

while (ocorrendo) {
    pergunta = window.prompt(`Escolha um número entre ${minNum} e ${maxNum}`)
    pergunta = Number(pergunta)

    if(isNaN(pergunta)) {
        window.alert("Número inválido | Tente novamente")
    }
    else if (pergunta < minNum || pergunta > maxNum){
        window.alert("Número inválido | Tente novamente")
    }
    else {
        tentativas++
        if (pergunta < randomNum){
        window.alert("Muito baixo, Tente novamente")
        
        }else if(pergunta > randomNum){
            window.alert("Muito alto, tente novamente")
        }else {
            window.alert(`Você acertou, o número é ${randomNum} Parábens. Você tentou ${tentativas} vezes`)
            ocorrendo = false

        }
    }
}


