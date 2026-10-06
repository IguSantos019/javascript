
const btn = document.querySelector('.btn');

btn.addEventListener('click', criarSenha);



function criarSenha(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz-._&!@#$%*ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(chars.length);
    let senhaTamanho = 8;
    let senha = '';
    for(var i = 0; i < senhaTamanho; i++){
        let randomNum = Math.floor(Math.random() * chars.length);
        senha += chars.substring(randomNum, randomNum + 1);
    }
    const p = document.querySelector('p');
    p.style.color = 'black';
    p.innerHTML = senha;
}