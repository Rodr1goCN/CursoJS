//função construtora -> objetos
//função fábrica -> objetos
//Construtora -> Pessoa (new)


//atributos ou métodos privados
const Calculadora = function () {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clr');
    this.btnEql = document.querySelector('.btn-eql');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.clearDisplay = function () {
        this.display.value = '';
    };

    this.botaoIgual = function () {
        let numDisplay = this.display.value;
        try {
            numDisplay = eval(numDisplay);
            if (!numDisplay) {
                alert('Conta inválida'); //se a conta for inválida e da essa msg
                return;
            }
            this.display.value = String(numDisplay)//se não, a conta prossegue
        } catch (e) {
            alert('Conta inválida');
        }
    };

    this.deleteNum = function () {
        this.display.value = this.display.value.slice(0, -1);//sempre apaga um número do display a esquerda
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clr')) {
                this.clearDisplay();
            }
            if (el.classList.contains('btn-del')) {
                this.deleteNum();
            }
            if (el.classList.contains('btn-eql')) {
                this.botaoIgual();
            }
            this.display.focus();
        });
    };

    this.btnParaDisplay = valor => this.display.value += valor;
    ;

    this.pressionaEnter =  () => {
        this.display.addEventListener('keypress', (e) => { //use o arrowfuncton para não perder o this
            if (e.keyCode === 13) {
                this.botaoIgual();
            }

        });
    };

}

const calculadora = new Calculadora();
calculadora.inicia()

