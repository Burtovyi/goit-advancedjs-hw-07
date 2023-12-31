class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person entered the house.');
    } else {
      console.log('The door is closed. Cannot enter.');
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(enteredKey: Key): void {
    if (enteredKey.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door opened successfully.');
    } else {
      console.log('Invalid key. Door remains closed.');
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};