let num = document.getElementById('num')
let valores = []
let numerosAdc = document.getElementById('numerosAdc')

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    }else {
        return false
    }
}
function inLista(n, v) {
    if (v.indexof(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}
document.getElementById('adcionarNum').onclick = function() {
    if (isNumber(num.value) && !inLista(num.value, valores)){
        window.alert('Tudo ok')
    }else {
        window.alert('[ERRO] Verifique se digitou algum valor ou se o valor já está na lista')
    }
    

}


document.getElementById('resul').onclick = function() {

}