var agora = new Date()

var hora = agora.getHours()

if (hora <= 6) {
    console.log(`Estamos na madrugada, boa madrugada! Agora são ${hora}:00h`)
}else if (hora < 12) {
    console.log(`Bom dia, agora são ${hora}:00h da manhã`)
}else if(hora < 18) {
    console.log(`Boa tarde, agora são ${hora}:00h da tarde`)
}else if (hora > 0){
    console.log(`Boa noite, agora são ${hora}:00h da noite`)
}