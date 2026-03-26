var idade = 13
console.log('De acordo com a legislação, menores de 16 anos não votam, menores de 18 anos ou maiores de 66 anos o voto é opcional, o restante é obrigatório')
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não vota`)

}else if (idade < 18 || idade >= 67){
        console.log(`Voto opcional`)
}else {
        console.log(`Você é obrigado a votar`)
    }
