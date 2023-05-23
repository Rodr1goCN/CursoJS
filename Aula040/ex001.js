function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { timeZone: 'GMT' })
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let intervalo; //Variável para armazenar o identificador do intervalo
let contador = 0;

function iniciaRelogio() {
    intervalo = setInterval(function () {
        contador++;
        relogio.innerHTML = criarHoraDosSegundos(contador);
    }, 1000);
}

iniciar.addEventListener('click', function (evento) {
    relogio.classList.remove('pausado')
    clearInterval(intervalo);
    iniciaRelogio();
})

pausar.addEventListener('click', function (evento) {
    relogio.classList.add('pausado')
    clearInterval(intervalo);
});
zerar.addEventListener('click', function (evento) {
    relogio.innerHTML = "00:00:00";
    clearInterval(intervalo);
    contador = 0;
    relogio.classList.remove('pausado')
});

/* Podemos tirar o addEventListener e por só um, ex:

document.addEventListener('click', function(e) {
    const el = e.target;
if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
}
*/