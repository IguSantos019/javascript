function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var hora = new Date().getHours()
    var corpo = document.body
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        foto.src = "imagens/foto-manha.jpg"
        corpo.style.backgroundColor = 'rgb(255, 188, 72)'
        msg.style.color = 'rgb(255, 188, 72)'
    }else if (hora >= 12 && hora < 18) {
        foto.src = "imagens/foto-tarde.jpg"
        corpo.style.backgroundColor = 'rgb(99, 190, 217)'
        msg.style.color = 'rgb(99, 190, 217)'
    }else {
        foto.src = "imagens/foto-noite.jpg"
        corpo.style.backgroundColor = 'rgb(0, 0, 58)'
    }
    
}



