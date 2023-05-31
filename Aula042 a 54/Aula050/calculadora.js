function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clr'),
        btnEql: document.querySelector('.btn-eql'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keypress',  (e) =>{ //use o arrowfuncton para não perder o this
                if(e.keyCode === 13){
                    this.botaoIgual();
                }
                
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        botaoIgual() {
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
        },

        deleteNum() {
            this.display.value = this.display.value.slice(0, -1);//sempre apaga um número do display a esquerda
        },
        cliqueBotoes() {

            document.addEventListener('click', function (e) {//this -> calculadora
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);// o innerText é o número dentro do botão da calculadora
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
            }.bind(this)); //ele vai usar o this da calculadora
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia()