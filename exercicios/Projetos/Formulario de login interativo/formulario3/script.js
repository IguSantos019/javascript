
const areaLogin = document.querySelector('.areaLogin');
const areaCadastro = document.querySelector('.areaCadastro');

const buttonLogin_Cadastro = document.querySelector('.AbasLogin-Cadastro button');

buttonLogin_Cadastro.addEventListener('click', function(){
    if(buttonLogin_Cadastro.textContent === 'Cadastrar'){
        buttonLogin_Cadastro.textContent = 'Fazer Login'        
    }else{
        buttonLogin_Cadastro.textContent = 'Cadastrar'
    }
    if(areaLogin.classList.contains('ativo') === true){
        areaLogin.classList.remove('ativo');
        areaCadastro.classList.add('ativo');
    }else{
        areaCadastro.classList.remove('ativo');
        areaLogin.classList.add('ativo')
    }
})