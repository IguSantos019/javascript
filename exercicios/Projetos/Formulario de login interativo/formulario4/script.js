const card = document.querySelector('.card');

const buttonCadastre = document.querySelector('.areaFacaCadastro button');

const buttonFazerLogin = document.querySelector('.areaFacaLogin button');

buttonCadastre.addEventListener('click', function(){
    card.classList.remove('loginActive');
    card.classList.add('cadastroActive');

})
buttonFazerLogin.addEventListener('click', function(){
    card.classList.remove('cadastroActive');
    card.classList.add('loginActive');
})