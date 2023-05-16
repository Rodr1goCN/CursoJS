function mostrarHora() {
    function mostrarDiaSemana(diaSemana) {
        let diaSemanaTexto;
        switch (diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo';
                return diaSemanaTexto;
            case 1:
                diaSemanaTexto = 'Segunda-feira';
                return diaSemanaTexto;
            case 2:
                diaSemanaTexto = 'Terça-feira';
                return diaSemanaTexto;
            case 3:
                diaSemanaTexto = 'Quarta-feira';
                return diaSemanaTexto;
            case 4:
                diaSemanaTexto = 'Quinta-feira';
                return diaSemanaTexto;
            case 5:
                diaSemanaTexto = 'Sexta-feira';
                return diaSemanaTexto;
            case 6:
                diaSemanaTexto = 'Sábado';
                return diaSemanaTexto;
            default:
                diaSemanaTexto = 'Ajeita que esta errado'
        }
        return diaSemanaTexto;
    }
    function mostrarDiaMes() {
        const diaMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        const mesDia = diaMes[dataAtual.getMonth()];
        return mesDia;
    }


    const dataAtual = new Date();

    const diaSemana = mostrarDiaSemana(dataAtual.getDay());

    //const dataMes = mostrarDiaMes(dataAtual.getMonth());

    const dia = String(dataAtual.getDate()).padStart(2, '0'); //adiciona um 0 a esquerda (quando necessário)
    const ano = dataAtual.getFullYear();
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const min = String(dataAtual.getMinutes()).padStart(2, '0');
    const seg = String(dataAtual.getSeconds()).padStart(2, '0');
    const mesDia = mostrarDiaMes();
    const verHora = `${diaSemana}, ${dia} de ${mesDia} de ${ano} <br> Hora: ${hora}:${min}:${seg}`;



    document.querySelector('.container > h1').innerHTML = verHora; //podemos fazer igual ao css (classe container > h1)
}

setInterval(mostrarHora, 1000);







/*                                          JEITO FÁCIL

const hora = document.querySelector('.container > h1');
const data = new Date();
hora.innerHTML = data.toLocaleString('pt-br', {dateStyle: 'full', timeStyle: 'short'});

setInterval(1000); */
