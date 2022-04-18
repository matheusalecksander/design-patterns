import { User } from '../interfaces/User';

export class MyDBClassic {
  private static _instance: MyDBClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDBClassic {
    if (MyDBClassic._instance === null) {
      MyDBClassic._instance = new MyDBClassic();
    }

    return MyDBClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const db1 = MyDBClassic.instance;

db1.add({ name: 'Matheus', age: 25 });
db1.add({ name: 'Cauane', age: 21 });
db1.add({ name: 'Lucas', age: 17 });
db1.remove(1);

db1.show();
