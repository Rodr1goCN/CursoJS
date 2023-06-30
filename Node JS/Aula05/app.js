const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //'..' volta uma pasta
const escreve = require('./Modules/escrever');
const ler = require('./Modules/ler');

/* const pessoas = [
    {nome: 'Rodrigo'},
    {nome: 'Maria'},
    {nome: 'João'},
    {nome: 'Luiza'},
    {nome: 'André'},
    ];
    
    const json = JSON.stringify(pessoas,'', 2);//o 2 se refere a indentação
    escreve(caminhoArquivo, json); */

async function leArquivo(caminho) {
    ler(caminho)
    const dados = await ler(caminho)
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(element => console.log(element)); //O método forEach() executa uma dada função em cada elemento de um array.
}

leArquivo(caminhoArquivo)