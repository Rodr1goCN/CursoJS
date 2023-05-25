function retornaFuncao(){
    const nome = 'Rodrigo';
    return function (){
        return nome;
    }
}

const funcao = retornaFuncao()
    console.log(funcao) //Ao imprimir funcao no console usando console.log(funcao), você verá a representação da função anônima no console. O console exibe a função como um objeto, mostrando sua estrutura e propriedades. Em resumo, funcao é uma variável que referencia uma função anônima. Para obter o valor retornado pela função, é necessário invocá-la adicionando () após a variável funcao.
