function scriptPag() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];



    function eventoForm(evento) {
        evento.preventDefault();//não permite que o navegador seja atualizado quando clica no botão enviar

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(pessoas) // mostra no console (navegador) o que tem dentro da array

        const pessoal = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        pessoas.push(pessoal);

        /* 
        para simplificar ainda mais pode adicionar desse jeito que também da certo:
    
        pessoas.push({
        nome:nome.value,
        sobrenome:sobrenome.value,
        peso:peso.value,
        altura:atura.value});
    
        */

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', eventoForm)

}
scriptPag()