let txtgraus = document.getElementById('txtgraus')
let radioBtnCtoF = document.getElementById('radioBtnCtoF')
let radioBtnFtoC = document.getElementById('radioBtnFtoC')
let prgf = document.getElementById('prgf')

txtgraus.focus()
function converter(){
    let numGraus = Number(txtgraus.value)
    let convF = numGraus * 9/5 + 32
    let convC = (numGraus - 32) * 5/9

    if(radioBtnCtoF.checked){
        prgf.textContent = `${numGraus}° C | ${convF.toFixed(1)}° F`
    }else if (radioBtnFtoC.checked){
        prgf.textContent = `${numGraus}°F | ${convC.toFixed(1)}° C`
    }else{
        window.alert(`Escolha as opcões`)
    }
    txtgraus.value = ``
    txtgraus.focus()
    
    
}