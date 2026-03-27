function verificar() {
    var date = new Date()
    var anoNasc = document.getElementById('anoNasc')

    var anoAtual = date.getFullYear()
    var idade = anoAtual - Number(anoNasc.value)
    
    var resul = document.getElementById('resul')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var sexo = document.getElementsByName('sexo')
    var gen = ''
    
    if (sexo[0].checked) {
        gen = 'um homem' 
        
        if (idade >= 0 && idade <= 5) {
            img.setAttribute('src', 'imagens/bebe.jpg')
        }else if (idade > 5 && idade <= 14) {
            img.setAttribute('src', 'imagens/criança-homem.jpg')
        }else if (idade > 15 && idade < 27) {
            img.setAttribute('src', 'imagens/jovemAdulto-homem.jpg')
        }else if (idade >= 27 && idade <= 55) {
            img.setAttribute('src', 'imagens/adulto-homem.jpg')
        }else if (idade > 55) {
            img.setAttribute('src', 'imagens/idoso-homem.jpg')
        }
    }
    if (sexo[1].checked) {
        gen = 'uma mulher'
        if (idade >= 0 && idade <= 5) {
            img.setAttribute('src', 'imagens/bebe.jpg')
        }else if (idade > 5 && idade <= 14) {
            img.setAttribute('src', 'imagens/criança-mulher.jpg')
        }else if (idade > 15 && idade < 27) {
            img.setAttribute('src', 'imagens/jovemAdulta-mulher.jpg')
        }else if (idade >= 27 && idade <= 55) {
            img.setAttribute('src', 'imagens/adulta-mulher.jpg')
        }else {
            img.setAttribute('src', 'imagens/idosa-mulher.jpg')
        }
        
    }
    if (Number(anoNasc.value) > anoAtual) {
        window.alert('[ERRO] Ano Inválido, tente novamente!')
        
    }else {
        resul.innerHTML = `Com os dados preenchidos detectamos <strong>${gen}</strong> com <strong>${idade}</strong> anos.`
        resul.appendChild(img)
    }
    
}

