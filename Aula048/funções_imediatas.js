//IIFE > Immediately Invoked Function Expression

(function(){
    const nome = "rodrigo";
    console.log(nome)
})(); //tem que por o () no final para chamar a função




(function(){
    const sobrenome = "Costa";
    function criaNome(nome){
    return nome + ' ' + sobrenome;
}
function falaNome(){
    console.log(criaNome('Rodrigo'));
}
falaNome();
})();