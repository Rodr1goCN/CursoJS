function numAleatório(min = 0, max = 4) {
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

/* esperaAí('fase 1', numAleatório())
.then(valor => {
    console.log(valor);
    return esperaAí('fase 2', numAleatório());
})
.then(valor => {
    console.log(valor);
    return esperaAí('fase 3', numAleatório());
})
.then(valor => {
    console.log(valor);
    return esperaAí('fase 4', numAleatório());
})
.then(valor => {
    console.log('Terminos na fase:', valor);
   
})
.catch(e => {
    console.log('EROOOOOOUUU', e);
}); */

async function executa(){ //promisse modo async vai permitir que você use o await dentro de uma função para você esperar uma promise seja finalizada
    try {
        const fase1 = await esperaAí('fase 1', numAleatório());
        console.log(fase1);
        const fase2 = await esperaAí('fase 2', numAleatório());
        console.log(fase2);
        const fase3 = await esperaAí('fase 3', numAleatório());
        console.log(fase3);
        const fase4 =  esperaAí('fase 4', numAleatório());
        console.log(fase4);
        setTimeout(function() {
            console.log('Essa promisse estava pendente', fase4)
        }, 1000);
        const fase5 = await esperaAí('fase 5', numAleatório());
        console.log(fase5);
        const fase6 = await esperaAí('fase 6', numAleatório());
        console.log(fase6);
     
        console.log('Terminamos na fase:', fase6);
    } catch(e){
        console.log(e)
    }
 
}

executa();


//modo pending = Se tirar o await da função, ira ficar deste modo
//fulfilled = representação de resolvida mas só pode ter o await de errado
//rejected = rejeitada