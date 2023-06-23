/* const nome = 'Rodrigo';
const sobrenome = 'Costa';
const idade = 38;

function soma(x,y){
    return x + y;
} */

/* export {nome as nome2, sobrenome, idade, soma} */






//podemos exportar por variáveis e funções

export const nome = 'Rodrigo';
export const sobrenome = 'Costa';
export const idade = 38;

export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}





export default (x, y) => x * y