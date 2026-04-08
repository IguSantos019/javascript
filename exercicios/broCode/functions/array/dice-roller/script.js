
const botao = document.getElementById('botao')
let result = document.getElementById('result')
let resultImg = document.getElementById('result-img')
let dados = document.getElementById('dadostxt')
dados.value = 1

let adc = document.getElementById('adc')
let sub = document.getElementById('sub')

var cont = Number(1)
adc.onclick = function adcDados(){
    cont++
    dados.value = cont
}
sub.onclick = function subDados(){
    cont--
    dados.value = cont
    
    if(cont == 0){
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
        images.push(`<img src="imagens-dados/${valor}.png" `)
    }
    console.log(values)
    result.textContent = values.join(' ')
    resultImg.textContent = images.join(' ')
    
}