
const botao = document.getElementById('botao')
let result = document.getElementById('result')
let resultImg = document.getElementById('result-img')
let dados = document.getElementById('dadostxt')

let adc = document.getElementById('adc')
let sub = document.getElementById('sub')

var cont = Number(1)
adc.onclick = function adcDados(){
    cont++
    dados.value = cont
    if(cont > 10){
        window.alert(`Desculpe, você atingiu o limite de dados jogáveis`)
        cont = 10
        dados.value = 10
        
    }
}
sub.onclick = function subDados(){
    cont--
    dados.value = cont
    
    if(cont < 1){
            window.alert(`Para jogar tem que ter pelo menos 1 dado`)
            cont = 1
            dados.value = 1
    }
    
}

function jogarDados(){
    let values = []
    let images = []

    for(let c = 0 ; c < dados.value ; c++){
        let valor = Math.floor(Math.random() * 6) + 1
        values.push(valor)
        images.push(`<img src="imagens-dados/${valor}.png">`)
    }
    console.log(values)
    if(dados.value == 1){
        result.innerHTML = `<p>Você jogou ${dados.value} dado</p>`
    }else {
        result.innerHTML = `<p>Você jogou ${dados.value} dados</p>`
    }
    
    result.innerHTML += `<p>Os dados são: ${values.join(` | `)}</p>`
    resultImg.innerHTML = images.join(` `)
    
}