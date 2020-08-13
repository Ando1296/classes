class Person {
  constructor(firstName, lastName, dob, father) {
    if(father && !(father instanceof Person)) {
      throw new TypeError('father is not an instance of Person');
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.father = father;
  }
  get fathersName() {
    return this.father && this.father.firstName;
  }
  set fathersName(value) {
    this.father.firstName = value;
  }
}

class Tsaturyan extends Person {
    constructor(firstName, dob, father) {
      super(firstName, 'Tsaturyan', dob, father);
    }
}
class Poghosyan extends Person {
  constructor(firstName, dob, father) {
    super(firstName, 'Poghosyan', dob, father);
  }
}
