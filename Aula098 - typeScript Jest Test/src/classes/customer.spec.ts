import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('Should have firstName, lastName and cpf', () => {
    // System under test
    const sut = createIndividualCustomer('Rodrigo', 'Costa', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Rodrigo');
    expect(sut).toHaveProperty('lastName', 'Costa');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('Should have methods to get name and idn for individual customer', () => {
    // System under test
    const sut = createIndividualCustomer('Rodrigo', 'Costa', '111.111.111-11');
    expect(sut.getName()).toBe('Rodrigo Costa');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });

  // Enterprise
  it('Should have name and cnpj', () => {
    // System under test
    const sut = createEnterpriseCustomer('Costa', '222');
    expect(sut).toHaveProperty('name', 'Costa');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('Should have methods to get name and idn for enterprise customer', () => {
    // System under test
    const sut = createEnterpriseCustomer('Costa', '222');
    expect(sut.getName()).toBe('Costa');
    expect(sut.getIDN()).toBe('222');
  });
});
