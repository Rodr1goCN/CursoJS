const form = document.querySelector('.form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // e = evento // não permite que o navegador seja atualizado quando clicar no botão enviar
    const inputPeso = e.target.querySelector('#cPeso')
    const inputAlt = e.target.querySelector('#cAlt')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAlt.value);

    if (!peso) { //!peso = se o peso for falso
        mostraResultado('Peso inválido', false)
        return; // se o peso for inválido ele para aqui, no return
    }
    if (!altura) { //!altura = se o altura for falso
        mostraResultado('Altura inválida', false)
        return; // se a altura for inválida ele para aqui, no return
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    mostraResultado(msg, true);


});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc > 39.9) return nivel[5]; //se o if tiver só uma linha pode ser encurtado
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}


function getImc(peso, altura) {
    const imc = (peso / ((altura * altura) / 10000));
    return imc.toFixed(2);
}


function criaP() {
    const p = document.createElement('p'); // p = paragrafo
    return p
}

function mostraResultado(msg, isValid) {
    const resultado = document.querySelector('.result');
    resultado.innerHTML = '';


    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado'); 
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg
    resultado.appendChild(p)
    resultDiv.style.display = 'block'
}