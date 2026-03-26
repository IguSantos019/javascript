

function verificar() {
    var anoNasc = document.getElementById('anoNasc')
    var anoAtul = new Date().getFullYear()
    var sex = document.getElementsByName('sexo')
    var gen = ''
    var resul = document.getElementById('resul')
    var img = document.getElementById('imagem')
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtul){
        window.alert('[ERRO] Ano Inválido! Tente novamente')
    }else if (anoNasc.value.length <= 3) {
        window.alert('[ERRO] Ano Inválido! Tente novamente')
    }else {
        var idade = anoAtul - Number(anoNasc.value)
    }
     if (sex[0].checked){
        gen = 'um homem'
        
    }else if (sex[1].checked) {
        gen = 'uma mulher'
        
    }
    if (idade >= 0 && idade <= 10 && sex[0].checked) {
        img.style.width = '200px'
        img.style.height = '200px'
        img.src = 'imagens/criança-homem.jpg'
    }


    resul.innerHTML = `Estamos falando de ${gen} com ${idade} anos`
        
}

