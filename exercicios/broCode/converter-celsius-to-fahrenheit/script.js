let txtgraus = document.getElementById("txtgraus")
let botao = document.getElementById('botao')
let ctoF = document.getElementById("celsiusToFahrenheit")
let ftoC = document.getElementById("FahrenheittoCelsius")
let numGraus = Number(txtgraus.value)

let valorF = (numGraus * 1.8) + 32

function converter(){

    if(ctoF.checked){
        return valorF
    }else if (ftoC.checked){
        let valorC = (valorF - 32) * 0.56
    }
    console.log(valorF)

}
