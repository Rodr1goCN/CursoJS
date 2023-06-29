const fs = require('fs').promises;
const path = require('path');

/* 
fs.readdir('./')// também pode por: fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e)) 
*/

async function readdir(rootDir){ //rootDir = diretório raíz
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for (let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        
        if (/\.git/g.test(fileFullPath)) continue; //ignora a pasta git
        if (/node_modules/g.test(fileFullPath)) continue; //ignora a pasta node modules
        
        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue
        }
        if (!/\.css$/g.test(fileFullPath) && (!/\.html$/g.test(fileFullPath))) continue; //le apenas os arquivos .css e arquivos .html
        
        console.log(fileFullPath);
    }
}

readdir('D:/Arquivos/Documentos/Udemy/CursoJS'); // se copiarmos direto do sistema o caminho das pastas sera desse jeito D:\Arquivos\Documentos\Udemy\CursoJS\Node JS\Aula03 mas só inverter a barra que ira funcionar
