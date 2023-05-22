/* 
try{ //É executada quando não há erros
    console.log('abri um arquivo');
    console.log('Manipulei o arquivo e gerrou o erro');
    console.log('fechei o arquivo');

    try{
        console.log(b);
    } catch(e){
        console.log('Deu erro')
    }finally{
        console.log('Também sou finally')
    }

}catch(e){ //É executada quando há erros
    console.log('tratando o erro');

}finally{ //É executada sempre
    console.log('FINALLY: eu sempre sou exectuado');
} 
*/

function retonaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        /*  
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit',
         hour12: false 
         Se caso não aparecer as horas com 2 digitos e sem o formato 24horas, o comando acima resolve
         */
    });



}
try {
    const hora = retonaHora(); //Se adicionarmos um número qualquer no (), vai gerar um erro
    console.log(hora)
} catch (e) {
    console.log(e)
} finally {
    console.log('tenha um bom dia')
}