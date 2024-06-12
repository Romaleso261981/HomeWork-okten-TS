/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/
var User = /** @class */ (function () {
    function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
    return User;
}());
var users = [];
for (var i = 0; i < 10; i++) {
    users.push(new User(i, "name".concat(i), "surname".concat(i), "email".concat(i), "phone".concat(i)));
}
console.log(users);
/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/
var evenIdUsers = users.filter(function (user) { return user.id % 2 === 0; });
console.log("об'єкти з парними id", evenIdUsers);
/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
*/
var sortedUsers = users.sort(function (a, b) { return a.id - b.id; });
console.log("id. по зростанню", sortedUsers);
/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/
var Client = /** @class */ (function () {
    function Client(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
    return Client;
}());
var clients = [];
for (var i = 0; i < 10; i++) {
    clients.push(new Client(i, "name".concat(i), "surname".concat(i), "email".concat(i), "phone".concat(i), [
        "apple",
        "banana",
        "orange"
    ]));
}
console.log("clients", clients);
/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/
var sortedClients = clients.sort(function (a, b) { return a.order.length - b.order.length; });
console.log("sorted clients by order length", sortedClients);
/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
var Car = /** @class */ (function () {
    function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = null;
    }
    Car.prototype.drive = function () {
        console.log("\u0457\u0434\u0435\u043C\u043E \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(this.maxSpeed, " \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443."));
    };
    Car.prototype.info = function () {
        console.log("\u043C\u043E\u0434\u0435\u043B\u044C - ".concat(this.model, ", \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A - ").concat(this.manufacturer, ", \u0440\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443 - ").concat(this.yearOfManufacture, ", \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C - ").concat(this.maxSpeed, ", \u043E\u0431'\u0454\u043C \u0434\u0432\u0438\u0433\u0443\u043D\u0430 - ").concat(this.engineCapacity));
    };
    Car.prototype.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    Car.prototype.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
    };
    Car.prototype.addDriver = function (driver) {
        this.driver = driver;
    };
    return Car;
}());
var mercedes = new Car("Mercedes", "Mercedes", 1990, 120, 2.5);
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
var Cinderella = /** @class */ (function () {
    function Cinderella(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
    return Cinderella;
}());
var Cinderellas = [];
for (var i = 0; i < 10; i++) {
    Cinderellas.push(new Cinderella("Cinderella".concat(i + 1), i + 20, i + 1));
}
console.log("Cinderellas", Cinderellas);
var Prince = /** @class */ (function () {
    function Prince(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
    return Prince;
}());
var prince = new Prince("Prince", 25, 7);
for (var i = 0; i < Cinderellas.length; i++) {
    if (Cinderellas[i].footSize === prince.shoeSize) {
        console.log("Cinderella", Cinderellas[i]);
    }
}
// const cinderella = Cinderellas.find((c) => c.footSize === prince.shoeSize);
// console.log("cinderella", cinderella);
