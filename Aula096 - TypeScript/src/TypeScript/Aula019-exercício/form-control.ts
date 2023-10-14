// Validação: se o campo esta vazio, checar se o email esta correto e checar se as duas senhas são iguais
const SHOW_ERROR_MESSAGES = 'show-error-message';

import isEmail from 'validator/lib/isEmail';

const form = document.getElementById('form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const password2 = document.getElementById('password2') as HTMLInputElement;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrorMessages(this);
  checkEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPasswords(password, password2);
  if (shouldSendForm(this)) console.log('Formulário ENVIADO!');
});

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Este campo não pode ficar vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function clearErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
  // Remove a mensagem de erro
}

function checkPasswords(password: HTMLInputElement, password2: HTMLInputElement) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senha diferente');
    showErrorMessage(password2, 'Senha diferente');
  }
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
  return send;
}
