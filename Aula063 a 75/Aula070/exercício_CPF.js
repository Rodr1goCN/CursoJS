/* 
705.484.450-52 // 070.987.720-03

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito)
Se o digito for maior que 9, consideramos 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (primeiro digito)
Se o digito for maior que 9, consideramos 0


let somarR = somar.replace(/\s/g, '+')//remove os espaços vazios e substitui por '+'
*/

function ValidaCPF(cpfEnviado) {
    this.cpfVerdadeiro = cpfEnviado //cpf que foi digitado
    this.cpfEnviado = cpfEnviado.replace(/\D+/g, ''); //remove tudo menos os números    
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfEnviado === 'undefined') return false;
    if (this.cpfEnviado.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfEnviado.slice(0, -2); //remove os dois ultimos dígitos do cpf
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);//adiciona o primeiro dígito

    const novoCpf = cpfParcial + digito1 + digito2; //junta os dois dígitos

    return novoCpf === this.cpfEnviado;
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1; //faz com que o tamanho do cpf tenha 9 + 1 dígitos
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));//transforma o val em número
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); //Le-se: se o digito for maior que 9 retorna 0 e ao contrário disso retorna ele próprio

}

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfEnviado[0].repeat(this.cpfEnviado.length);
    return (sequencia === this.cpfEnviado);
}

ValidaCPF.prototype.toString = function () {
    return this.cpfVerdadeiro.replace()
}

const cpf = new ValidaCPF('705.484.450-52');

if (cpf.valida()) {
    console.log(cpf.toString() + ': ' + 'CPF válido');
} else {
    console.log(cpf.toString() + ': ' + 'CPF inválido');
}

