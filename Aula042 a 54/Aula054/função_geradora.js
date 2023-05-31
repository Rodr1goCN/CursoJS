function* geradora1(){
    //código qualquer
    yield 'valor 1';
    //código qualquer
    yield 'valor 2';
    //código qualquer
    yield 'valor 3';
}

const g1 = geradora1()
//console.log(g1.next()); //para visualizar o valor é necessário usar o next(), que ira retornar o value e o done, onde: (value: texto/objeto e o done: vai retornar true o false (true = já terminou o código e false = não terminou))
//console.log(g1.next().value)
//console.log(g1.next())
//onsole.log(g1.next())



//podemos também usar o for of
for (let valor of g1){
    console.log(valor)
}





function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    };
}

const g2 = geradora2()
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


console.log('############');


function* gerador3(){
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4(){
    yield* gerador3(); //vai continuar de onde parou no gerador3
    yield 3;
    yield 4;
    yield 5;
}

const g4 = gerador4();
for (let valor of g4){
    console.log(valor)
}



console.log('##########');



function* geradora5(){
    yield function(){
        console.log('yield 1');
    };

    return function(){
        console.log('yield 2')//se usar o return e se tiver outro yield, ele vai ser 'cancelado' 
    }

    yield function(){
        console.log('yield 2')
    };
}

const g5 = geradora5();
const func1 = g5.next().value
const func2 = g5.next().value

func1();
func2();