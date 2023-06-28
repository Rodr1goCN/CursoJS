const Cachorros = require('../Aula02/Z/mod2');
//   ./B/C (dentro desta pasta)
//  ../Z   (volta pasta)


const cachorrinho = new Cachorros('nenem');
cachorrinho.latir();
console.log('##############');




const path = require('path');
console.log(path.resolve(__filename)) //nome do arquivo
console.log(path.resolve(__dirname, '..', '..')) //nome do diretório (usando '..' depois da vírgula, volta uma pasta)
