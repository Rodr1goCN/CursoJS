function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}


const taimer = setInterval(function() {
    console.log(mostraHora());
 }, 1000);

setTimeout(function() {
    clearInterval(taimer)
}, 5000); //o time é contado por milisegundos = 1000 = 1segundo