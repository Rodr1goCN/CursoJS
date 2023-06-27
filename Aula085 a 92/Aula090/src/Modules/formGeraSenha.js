import geraSenha from "./geradores";

const res = document.querySelector('.resultado');
const qtdNum = document.querySelector('.qtd-num');
const chkMai = document.querySelector('.chk-maiusculas');
const chkMin = document.querySelector('.chk-minusculas');
const chkNum = document.querySelector('.chk-numeros');
const chkSim = document.querySelector('.chk-simbolos');
const btnPas = document.querySelector('.gerar-senha');

export default () => {
    btnPas.addEventListener('click', () => {
        res.innerHTML = gera();
    });
};

function gera(){
    const senha = geraSenha(
        qtdNum.value,
        chkMai.checked,
        chkMin.checked,
        chkNum.checked,
        chkSim.checked
    );

    return senha || 'Selecione alguma opção';
}