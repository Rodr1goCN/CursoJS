class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault()//quando clica em enviar no formulário, não deixa a página ser atualizada
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSãoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado, parabains!')
            this.formulario.submit();
        }
    }

    senhasSãoValidas() {
        let senhaValida = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir_senha');

        if(senha.value !== repetirSenha.value){
            senhaValida = false;
            this.criaErro(senha, 'Campos senha e Repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e Repetir senha precisam ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            senhaValida = false;
            this.criaErro(senha, 'Senha precisa ser entre 6 e 12 caracteres.');
        }

        return senhaValida;
    }

    camposSaoValidos() {
        let valido = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {//remove a msg duplicada quando clica em enviar no html
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;//Elemento irmão anterior, no caso o label do html
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco, favor preencher com dados corretos.`)//cria uma msg de erro
                valido = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valido = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valido = false;
            }
        }

        return valido;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let usuarioValido = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            usuarioValido = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) { //se o usuário for diferente de letras minusculas ou maiúsculas ou numeros 
            this.criaErro(campo, 'Nome usuário só poderá conter letras e/ou números.');
            usuarioValido = false;
        }
        return usuarioValido;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {//exibe a msg de erro
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');//cria uma class no html (error-text)
        campo.insertAdjacentElement('afterend', div); //a msg vai estar em baixo do input

    }
}

const valida = new ValidaFormulario();