 import {nome, sobrenome, idade, soma, Pessoa} from './modulo';

/*const nome = 'Nascimento' //declara no import: nome as nome2 */

/* console.log(nome, nome2, sobrenome, idade, soma(53, 88)) */




const p1 = new Pessoa('Rodrigo', 'Costa');
console.log(p1)

import * as MeuModulo from './modulo' //ira importar tudo que esta escrito como export no modulo.js

console.log(MeuModulo)





import qualquerNome from './modulo'
console.log(qualquerNome(5,5)) //se colocar default no export e o import botar literalmente qualquer nome, ele vai funcionar normalmente // SÓ PODE EXPORT UM DEFAULT

console.log(nome, sobrenome, idade, soma(9, 66))