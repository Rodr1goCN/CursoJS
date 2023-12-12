const personPrototype = {
  firstName: 'Rodrigo',
  lastName: 'costa',
  age: 38,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Letícia';
console.log(anotherPerson.firstName);
console.log(anotherPerson.lastName);
console.log(anotherPerson.fullName());
