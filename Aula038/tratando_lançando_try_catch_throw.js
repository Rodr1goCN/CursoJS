/*
 try { //é executada quando não há erros
    console.log(naoExisto);
} catch(erro){ // pega o erro e exibe (interessante não mostrar para o usuário final, o código do erro)
    console.log('naoExisto não exite');
    console.log(erro)
} 
*/

function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números');
    }
    return x + y
}

try{
    console.log(soma(1,2))
    console.log(soma('2',2));

} catch(erro){
    console.log(erro)
    console.log('Alguma coisa mais amigável pro usuário')
}