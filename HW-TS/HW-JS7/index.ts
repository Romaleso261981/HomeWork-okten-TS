/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/

class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;

  constructor(
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
  }
}

let users: User[] = [];
for (let i = 0; i < 10; i++) {
  users.push(new User(i, `name${i}`, `surname${i}`, `email${i}`, `phone${i}`));
}

console.log(users);

/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/

const evenIdUsers = users.filter((user) => user.id % 2 === 0);
console.log("об'єкти з парними id", evenIdUsers);

/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
*/

const sortedUsers = users.sort((a, b) => a.id - b.id);
console.log("id. по зростанню", sortedUsers);

/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/

class Client {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  order: string[];

  constructor(
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    order: string[]
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

let clients: Client[] = [];
for (let i = 0; i < 10; i++) {
  clients.push(
    new Client(i, `name${i}`, `surname${i}`, `email${i}`, `phone${i}`, [
      "apple",
      "banana",
      "orange"
    ])
  );
}

console.log("clients", clients);

/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/

const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log("sorted clients by order length", sortedClients);

/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

class Car {
  model: string;
  manufacturer: string;
  yearOfManufacture: number;
  maxSpeed: number;
  engineCapacity: number;
  driver: any;

  constructor(
    model: string,
    manufacturer: string,
    yearOfManufacture: number,
    maxSpeed: number,
    engineCapacity: number
  ) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = null;
  }

  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину.`);
  }

  info() {
    console.log(
      `модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.yearOfManufacture}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`
    );
  }

  increaseMaxSpeed(newSpeed: number) {
    this.maxSpeed += newSpeed;
  }

  changeYear(newValue: number) {
    this.yearOfManufacture = newValue;
  }

  addDriver(driver: any) {
    this.driver = driver;
  }
}

const mercedes = new Car("Mercedes", "Mercedes", 1990, 120, 2.5);

mercedes.drive();
mercedes.info();
mercedes.increaseMaxSpeed(10);
mercedes.changeYear(1991);
mercedes.addDriver({ name: "driver", age: 25 });

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

class Cinderella {
  name: string;
  age: number;
  footSize: number;

  constructor(name: string, age: number, footSize: number) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

const Cinderellas: Cinderella[] = [];

for (let i = 0; i < 10; i++) {
  Cinderellas.push(new Cinderella(`Cinderella${i + 1}`, i + 20, i + 1));
}

console.log("Cinderellas", Cinderellas);

class Prince {
  name: string;
  age: number;
  shoeSize: number;

  constructor(name: string, age: number, shoeSize: number) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
}

const prince = new Prince("Prince", 25, 7);

for (let i = 0; i < Cinderellas.length; i++) {
  if (Cinderellas[i].footSize === prince.shoeSize) {
    console.log("Cinderella", Cinderellas[i]);
  }
}

// const cinderella = Cinderellas.find((c) => c.footSize === prince.shoeSize);
// console.log("cinderella", cinderella);
