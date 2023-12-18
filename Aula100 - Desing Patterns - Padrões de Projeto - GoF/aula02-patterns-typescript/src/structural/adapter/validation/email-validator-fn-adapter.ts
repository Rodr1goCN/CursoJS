import isEmail from 'validator/lib/isEmail';
import { FnEmailValidatorProtocol } from './email-validator-protocol';

export const fnEmailValidatorAdapter: FnEmailValidatorProtocol = (
  value: string,
): boolean => {
  return isEmail(value);
};
