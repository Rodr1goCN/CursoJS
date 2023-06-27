const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbolo = () => String.fromCharCode(rand(33, 48));

//Jeito SIMPLES
/* function geraSenha(comprimento){ // comprimento = números de caracteres que a senha deve ter
    let senha = '';
    for (let i = 0; i < comprimento; i++){
        const randNum = rand(0, 4);

        if (randNum === 0){
            senha += geraMaiuscula();
        } else if (randNum === 1){
            senha += geraMinusculas();
        } else if (randNum === 2) {
            senha += geraNumero();
        } else {
            senha += geraSimbolo();
        }
    }
    return senha
}

const senha = geraSenha(8)
console.log(senha) */

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = []
    
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula()); // se maiusculas for verdadeiro, executa o senhaArray, se não, não executa
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    senhaArray.sort(() => 0.5 - Math.random()) //embaralha a senha gerada // O valor 0.5 é frequentemente utilizado porque proporciona um bom equilíbrio entre aleatoriedade e efetividade no embaralhamento.

    return senhaArray.join('').slice(0, qtd); //o .join('') deixa no prompt sem formatação(, ou '')
}
