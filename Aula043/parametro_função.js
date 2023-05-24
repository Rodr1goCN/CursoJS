function funcao(){
    console.log('arguments sem aspas')
}
funcao('valor', 1, 2, 3, 4, 5) //Pode por qualquer coisa como argumento que o javascript irá te entregar sem dar erro // console.log(arguments) ira ver que tem dentro da funcao('valor'...)


//argumetos que sustenta todos os argumentos enviados
function funcoes(e){
    let total = 0
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total, e)
}
funcoes(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //calcula o valor dos argumentos




function funcoesArgu(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
}
funcoesArgu(1, 2, 3, 4);




function funca(a, b = 2, c = 6){ //esse é novo jeito de definir um valor
    console.log(a + b + c)
}
funca(2)




function funcaos(a, b = 2, c = 6){ 
    console.log(a + b + c)
}
funcaos(2, 5, 7) // para 'usar' o valor definido no b = 2 tem que por o undefined entre o 2 e o 5. exemplo: 2, undefined, 6




function funcao2({nome, sobrenome, idade}){ // atribuição via desestruturação
    console.log(nome, sobrenome, idade)
}
// let objt = {nome: 'Rodrigo', sobrenome:'Costa', idade:'38'} e no funcao2(objt)
funcao2({nome: 'Rodrigo', sobrenome:'Costa', idade:'38'})




function conta(operador, acumulador, numeros){//se adicionarmos o ...numeros não precisa por chaves nos numeros: 20, 10, 30, 40
    console.log(operador, acumulador, numeros)
}
conta('+', 0, [20, 10, 30, 40]);





function conta2(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if(operador === '+') acumulador += numero;
       if(operador === '-')acumulador -= numero;
       if(operador === '*') acumulador *= numero;
       if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador); //faz a soma dentro da array
}
conta2('/', 1, 20, 10, 30, 40); //se mudar o operador, o valor muda de acordo com ela