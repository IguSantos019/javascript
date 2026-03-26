

function verificar() {
    var anoNasc = document.getElementById('anoNasc')
    var anoAtul = new Date().getFullYear()
    var idade = anoAtul - Number(anoNasc.value)
    var sex = document.getElementsByName('sexo')
    var gen = ''
    var resul = document.getElementById('resul')
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtul){
        window.alert('[ERRO] Ano Inválido! Tente novamente')
    }
     if (sex[0].checked){
        gen = 'homem'
        
    }else if (sex[1].checked) {
        gen = 'mulher'
        
    }
    resul.style.textAlign = 'center'
        resul.innerHTML = `Estamos falando de um(a) ${gen} com ${idade} anos.`
}

