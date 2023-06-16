//Validando CPF usando CLASS

class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpfVerdadeiro = cpfEnviado;
        this.cpfEnviado = cpfEnviado.replace(/\D+/g, '');
    }

    valida() {
        if (typeof this.cpfEnviado === 'undefined') return false;
        if (this.cpfEnviado.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = this.cpfEnviado.slice(0, -2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial)
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;

        return novoCpf === this.cpfEnviado;
    }

    static criaDigito(cpfParcial) { // quando for static remove o this e coloca o nome da class
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia() {//remover a validação do cpf com números em sequência
        const sequencia = this.cpfEnviado[0].repeat(this.cpfEnviado.length);
        return (sequencia === this.cpfEnviado);
    }

    toString() {
        return this.cpfVerdadeiro.replace();
    }
}



const cpf = new ValidaCPF('070.987.720-03');

if (cpf.valida()) {
    console.log(cpf.toString() + ': ' + 'CPF válido');
} else {
    console.log(cpf.toString() + ': ' + 'CPF inválido');
}
