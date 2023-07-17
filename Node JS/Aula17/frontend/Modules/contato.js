import validator from "validator";

export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    init(){
        this.events();
    }
    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e){
        const el = e.target;
        const nomeInput = el.querySelector('input[name=nome]');
        const sobrenomeInput = el.querySelector('input[name=sobrenome]');
        const emailInput = el.querySelector('input[name=email]');
        const telefoneInput = el.querySelector('input[name=telefone]');
        let error = false;

        if(!validator.isAlpha(nomeInput.value)){
            alert('Nome inválido');
            error = true;
        }
        if(!validator.isAlpha(sobrenomeInput.value)){
            alert('Sobrenome inválido');
            error = true;
        }
        if(!validator.isEmail(emailInput.value)){
            alert('Email inválido');
            error = true;
        }
        if(!validator.isMobilePhone(telefoneInput.value, 'pt-BR')){
            alert('Telefone inválido');
            error = true;
        }
       
        if(!error) {
            console.log('Formulário válido')
            el.submit();
        }    
    }
}