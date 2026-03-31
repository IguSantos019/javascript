let min = 1
let max = 1000
let randomNum
function gerar() {
    randomNum = Math.floor(Math.random() * max - min ) + min
    document.getElementById('prgf').innerHTML = randomNum
    console.log(randomNum)
}