//CRIA UM ARQUIVO TESTE.TXT (NA AULA5) ESCRITO FRASE1
/* const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt'); //'..' volta uma pasta


fs.writeFile(caminhoArquivo, 'frase1', {flag: 'w', encoding:'utf8'}); //flag:'w' diz para apagar tudo e escrever novamente a frase1 // flag:'a' não apaga a frase1 e reescreve novamente na mesma linha // 'frase1\n' faz a quebra de linha e fica reescrevendo */



const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w', encoding:'utf8'});
}

