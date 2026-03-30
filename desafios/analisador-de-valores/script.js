let valores = []
let numerosAdc = document.getElementById('numerosAdc')
let num = document.getElementById('num')
let resultxt = document.getElementById('resultxt')
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    }else {
        return false
    }
}
function inLista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}
document.getElementById('adcionarNum').onclick = function() {
    if (isNumber(num.value) && ! inLista(num.value, valores)){
        valores.push(Number(num.value))
        numerosAdc.innerHTML += `<p>Número <strong>${num.value}</strong> adcionado!</p>`
        resultxt.innerHTML  = ''
    }else {
        window.alert('[ERRO] Número inválido ou já está na lista')
    }
    num.value = ''
    num.focus()
}


document.getElementById('resulbtn').onclick = function() {
    if (valores.length == 0) {
        window.alert('[ERRO] Adicione números na lista primeiro')
        
    }else {
        let total = valores.length
        let primNum = valores[0]
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }

            media = soma / total
        }
        resultxt.style.paddingBottom = "5px"
        resultxt.innerHTML = `<p>Ao total temos <strong>${total}</strong> números declarados</p>`
        resultxt.innerHTML += `<p>O primeiro número declarado foi <strong>${primNum}</strong></p>`
        resultxt.innerHTML += `<p>O ultimo valor declarado foi <strong>${valores.at(-1)}</strong></p>`
        resultxt.innerHTML += `<p><strong>${maior}</strong> foi o maior número cadastrado </p>`
        resultxt.innerHTML += `<p><strong>${menor}</strong> foi o menor número cadastrado</p>`
        resultxt.innerHTML += `<p>a soma dos valores é <strong>${soma}</strong></p>`
        resultxt.innerHTML += `<p>o valor da média é <strong>${media.toFixed(2)}</strong></p>`
        
    }
}