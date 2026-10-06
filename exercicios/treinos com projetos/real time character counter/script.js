

let inptChars = document.querySelector('.inptChars');
var totalMoreChars = document.querySelector('.totalMore');
var totalLessChars = document.querySelector('.totalLess');

inptChars.addEventListener('keyup', ()=>{
    updateCounter()
})

function updateCounter() {

    let addChars = inptChars.value.length;
    totalMoreChars.innerText = `Total de Caracteres: ${addChars}`;

    let removeChars = 50;
    totalLessChars.innerText = removeChars - addChars;
  
}