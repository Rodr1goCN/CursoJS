const nome = 'Rodrigo';

function falaNome(){
    const nome = 'Costa'; //se adicionarmos uma variável aqui, só ira aparecer esse
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Nascimento'; //Apesar dessa nova variável ter o mesmo nome que a variável definida no escopo global, ela não afeta a capacidade da função falaNome()
    falaNome();
}
usaFalaNome() //ira funcionar do mesmo jeito