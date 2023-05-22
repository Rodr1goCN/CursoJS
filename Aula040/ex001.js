const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let pausado = false;
let intervalo; //Variável para armazenar o identificador do intervalo
let contador = 0


iniciar.addEventListener('click', function (evento) {
    
    setInterval(() => {
        contador++;
        const hora = String(Math.floor(contador / 3600)).padStart(2, '0');
        const minuto = String(Math.floor((contador % 3600) / 60)).padStart(2, '0');
        const segundo = String(contador % 60).padStart(2, '0');

        const counter = `${hora}:${minuto}:${segundo}`
        relogio.innerHTML = counter
    }, 1000);
});
pausar.addEventListener('click', function (evento) {
    function atualizaContador(){
        let contador = 0
        contador++
        relogio.innerHTML = contador
    }
    pausado = !pausado
    if (pausado) {

        clearInterval(intervalo);

    } else {
        intervalo = setInterval(atualizaContador, 1000);
    }
});
zerar.addEventListener('click', function (evento) {
    alert('Cliquei')
});

