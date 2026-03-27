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
        gen = 'Homem'
        if (idade >= 0 && idade <= 14) {
            img.setAttribute('src', 'imagens/criança-homem.jpg')
        }else if (idade > 15 && idade < 22) {
            img.setAttribute('src', 'imagens/jovemAdulto-homem.jpg')
        }else if (idade >= 22 && idade <= 55) {
            img.setAttribute('src', 'imagens/adulto-homem.jpg')
        }else {
            img.setAttribute('src', 'imagens/idoso-homem.jpg')
        }
    }
    

    if (sexo[1].checked) {
        gen = 'Mulher'
    }
    resul.innerHTML = `${idade} ${gen}`
    resul.appendChild(img)
}

