import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  firstName: string;
  userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }
  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. das Américas', number: 61 },
          { street: 'Rua das Rosas', number: 31 },
        ]);
      }, 2000);
    });
  }
}
