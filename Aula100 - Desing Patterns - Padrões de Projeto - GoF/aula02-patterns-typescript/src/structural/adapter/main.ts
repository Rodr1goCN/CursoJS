import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { fnEmailValidatorAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorProtocol,
  FnEmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email válido (CLASS)');
  } else {
    console.log('Email inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: FnEmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email válido (FUNCTION)');
  } else {
    console.log('Email inválido (FUNCTION)');
  }
}

const email = 'drigocn2@hotmail.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(fnEmailValidatorAdapter, email);
