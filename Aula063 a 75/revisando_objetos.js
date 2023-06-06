const pessoas = {
    nome: 'Rodrigo', idade: 38,
};
    const chave = 'nome';
    console.log(pessoas['nome']); //Também funciona desse jeito
    console.log(pessoas.idade);
    console.log(pessoas[chave]);//Também funciona usando uma variável
    console.log('##########');





    const pessoas2 = new Object();
    pessoas2.nome = 'Rodrigo';
    pessoas2.sobrenome = 'Costa';

    console.log(pessoas2.nome);
    console.log(pessoas2.sobrenome);
    console.log('##########');







    const pessoas3 = new Object();
    pessoas3.nome = 'Rodrigo';
    pessoas3.sobrenome = 'Costa';
    delete pessoas3.nome //deleta o nome dentro do objeto, ficando somente com o sobrenome

    console.log(pessoas3);
    console.log('##########');






    const pessoas4 = new Object();
    pessoas4.nome = 'Rodrigo';
    pessoas4.sobrenome = 'Costa';
    pessoas4.idade = 38;
    
    pessoas4.falarNome = function(){
        return(`${this.nome} estava falando algo em ${pessoas4.pegarDataNascimento()}.`)
    };
    pessoas4.pegarDataNascimento = function(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    };
    console.log(pessoas4.falarNome());
    console.log(pessoas4.pegarDataNascimento());//Mostra o ano de nascimento

    for (let chave in pessoas4){
        console.log(pessoas4[chave])//Mostra os valores das chaves //Quando functions estão dentro de objetos são chamados de métodos
    }
    console.log('##########');






    //Factory functions / Constructor functions / Classes

    //factory functions:
    function criaPessoa(nome, sobrenome){
        return{
            nome,
            sobrenome,
            get nomeCompleto(){
                return `${this.nome} ${this.sobrenome}`
            }
        };
    }
    const p1 = criaPessoa('Rodrig', 'Costa');
    console.log(p1.nomeCompleto) //se usar o get não precisa por o () e se retirar o get precisa por o () no nomeCompleto()
    console.log('##########');







    //Constructor functions:
    function Pessoa(nome, sobrenome){ //no Constructor functions sempre se usa a primeira letra depois da function MAIÚSCULA
        this.nome = nome; 
        this.sobrenome = sobrenome;
        Object.freeze(this);//trava o objeto e não deixa fazer mudanças (NÃO SE DEVE USAR)
    }
    const p2 = new Pessoa('Rodrigo', 'Costa'); 
    Object.freeze(p2);//trava o objeto e não deixa fazer mudanças
    p2.nome = 'outro nome' //podemos mudar o nome já registrado para um outro
    console.log(p2)