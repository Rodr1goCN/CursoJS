export interface EmailValidatorProtocol {
  isEmail: FnEmailValidatorProtocol;
}

export interface FnEmailValidatorProtocol {
  // FN no começo quer dizer que é uma function
  (value: string): boolean;
}
