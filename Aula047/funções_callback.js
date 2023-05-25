function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num); //cria um número aleatório entre 1000 e 3000 ms ou 1 a 3 segundos
}
console.log(rand())

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand())

}
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand())// função rand criada acima gera um número aleatório e faz com que seja mostrado o 'f2' em um determinado segundo entre 1 a 3segundos

}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand())

}

f1(f1callback);

function f1callback(){
    f2(f2callback);
}
function f2callback(){
    f3(f3callback);
}

function f3callback(){
    console.log('olá mundo!')
}

/* 
f1(function () {
    f2(function () {
        f3(function () {
            console.log('Olá mundo!')
        });
    });
}); 
*/

/* 
f1();
f2();
f3(); 
*/
