let height = document.getElementById('height').value
document.getElementById('height').value = '1,'
document.getElementById('name').focus()


let buttonCalculate = document.getElementById('buttonCal')


buttonCalculate.onclick = function calculateIMC(){
    let firstName = document.getElementById('name').value
    
    firstName = firstName.trim().slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase()
    let weight = document.getElementById('weight').value
    result.innerHTML = `<strong>${firstName}</strong> seu <em>IMC</em> é <strong>${calIMC(height, weight)}</strong>`

}
function calIMC(altura, peso){
    var imc = Number(pase / (parseFloat(altura) * 2)).toFixed(2)
    return imc
}