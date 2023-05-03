const numero = Number(prompt('Escolha um número:')); //desse jeito já pega o numero do prompt e transforma em Number (e pode usar o const)
let numeroTitulo = document.getElementById('num-titu'); //sempre que usar o getElementById('')  para pegar o id do html usar aspas
const textoTitulo = document.getElementById('texto');

// numero = Number(numero) 

numeroTitulo.innerHTML = numero;
textoTitulo.innerHTML = '';
textoTitulo.innerHTML += `<p> A raiz quadrada dele é: <strong>${numero ** 0.5}</strong></p>`;
textoTitulo.innerHTML += `<p>${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong></p>`;
textoTitulo.innerHTML += `<p>É NaN (Not a Number)? <strong>${Number.isNaN(numero)}</strong></p>`;
textoTitulo.innerHTML += `<p>Arredondando para BAIXO: <strong>${Math.floor(numero)}</strong></p>`;
textoTitulo.innerHTML += `<p>Arredondando para CIMA <strong>${Math.ceil(numero)}</strong></p>`;

textoTitulo.innerHTML += `<p>Com duas casas decimais <strong>${numero.toFixed(2)}</strong></p>`;