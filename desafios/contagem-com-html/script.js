function somar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    let resul = document.getElementById('resul')
    resul.innerHTML = `Contando `
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Você precisa preencher os dados obrigatórios para somar')
    }else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f ; c += p)
            resul.innerHTML += ` 👉 ${c}`


    }


        
    



   

}


 /*
    while (inicio.value < fim.value){
        resul.innerText = c.value
        c++
        
    }*/
   /*
        for (c = inicio.value ; c <= fim.value ; c++){
        resul.innerHTML = c     
    }*/