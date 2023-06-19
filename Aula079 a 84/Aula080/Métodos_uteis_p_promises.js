function numAleatório(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAí(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Deu ruim aí');
            return;
        }
        setTimeout(() => {

            resolve(msg.toUpperCase() + ' - Esta aí a promise'); //só pode por um parâmetro dentro do resolve
        }, tempo);
    });//resolve = Este código executou com sucesso então resolve // reject = Deu erro no código e rejeita ele
}

//Promise.all //Promise.race //Promise.resolve //Promise.reject
const promises = [ 
   //'primeiro valor',
    esperaAí('promise 1', numAleatório(1, 4)),
    esperaAí('promise 2', numAleatório(1, 4)),
    esperaAí('promise 3', numAleatório(1, 4)),
   // esperaAí(1000, 1000),
   // 'outro valor'
];

//Promise.all(promises) //Promise.all = usado para combinar várias promessas em uma única promessa
Promise.race(promises)//Promise.race = executa primeiro o que não for promessas, resolve uma a uma, a primeira que ele resolver, entrega o valor executado
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    })

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.reject('Página em cache') ;
    } else {
        return esperaAí ("Baixei a página", 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('EROOOUUU',e));