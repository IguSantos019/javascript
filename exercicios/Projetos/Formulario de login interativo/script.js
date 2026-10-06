const buttonCadastro = document.getElementById('buttonCadastro');

buttonCadastro.addEventListener('click', function(){
    const direita = document.querySelector('.direita');

    direita.style.transform = 'translateX(1000px)';
    direita.style.opacity = 0;
    direita.style.display = 'none';

})