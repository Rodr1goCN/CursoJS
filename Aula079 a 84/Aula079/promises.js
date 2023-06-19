//promessas 
/*  */
function numAleatório(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}



function esperaAí(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Deu ruim aí')
        setTimeout(() => {
            
            resolve(msg); //só pode por um parâmetro dentro do resolve
        }, tempo);
    });//resolve = Este código executou com sucesso então resolve // reject = Deu erro no código e rejeita ele



}

esperaAí('frase 1', numAleatório(1, 4))
.then(resposta => {
    console.log(resposta);
    return esperaAí('frase 2', numAleatório(1, 4));//isso é uma promise
})
.then(resposta => {
    console.log(resposta)
    return esperaAí(11, numAleatório(1, 4));//isso é uma promise
})
.then(resposta => {
    console.log(resposta)
    return esperaAí('frase 4', numAleatório(1, 4));//isso é uma promise
})
.then(resposta => {
    console.log(resposta)
    return esperaAí('frase 5', numAleatório(1, 4));//isso é uma promise
})
.then(resposta => {
    console.log(resposta);//precisa disso para funcionar a ultima frase, se não, não aparece no log
})
.then(() => {
    console.log('Será exibido por último');//o código feito na parte acima não precisa por aqui
})
.catch(e => {
    console.log('EROOOOOU', e)    
});
