/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
- створити функцію яка обчислює та повертає площу кола з радіусом r
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
- створити функцію яка приймає масив та виводить кожен його елемент
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
- створити функцію яка повертає найменьше число з масиву
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/

/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

console.log(((a: number, b: number) => a * b)(5, 10));

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/

console.log(((r: number) => 3.14 * r ** 2)(5));

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

console.log(((r: number, h: number) => 2 * 3.14 * r * (r + h))(5, 10));

/*- створити функцію яка приймає масив та виводить кожен його елемент*/

const d = (arr: number[]) => arr.forEach((item) => console.log(item));

d([1, 2, 3]);

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

const e = (text: string) => {
  const p = document.createElement("p");
  p.innerText = text;
  document.body.appendChild(p);
};

e("text");

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

const f = (text: string) => {
  const ul = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
};

f("text");

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

const g = (text: string, count: number) => {
  const ul = document.createElement("ul");
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
};

g("text", 5);

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/

const h = (arr: any[]) => {
  const ul = document.createElement("ul");
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
};

h([1, "text", true]);

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

((arr) => {
  arr.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `id: ${item.id}, name: ${item.name}, age: ${item.age}`;
    document.body.appendChild(div);
  });
})([
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Jack", age: 35 }
]);

/*- створити функцію яка повертає найменьше число з масиву*/

const z = (arr: number[]) => {
  let minNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    minNumber = arr[0];
    if (arr[i] < minNumber) {
      // console.log(arr[i])
      minNumber = arr[i];
    }
  }
  return minNumber;
  // return Math.min(...arr);
};

console.log(z([-10, 2, 3]));

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/

console.log(((arr) => arr.reduce((acc, item) => acc + item, 0))([1, 2, 10]));

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

console.log(
  ((arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
  })([11, 22, 33, 44], 0, 1)
);

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/

type CurrValue = {
  currency: string;
  value: number;
};

const w = (
  sumUAH: number,
  currencyValues: CurrValue[],
  exchangeCurrency: string
) => {
  const currency = currencyValues.find(
    (item) => item.currency === exchangeCurrency
  );
  if (currency) {
    return sumUAH / currency.value;
  } else {
    return "Валюта не знайдена";
  }
};

console.log(
  w(
    10000,
    [
      { currency: "USD", value: 40 },
      { currency: "EUR", value: 42 }
    ],
    "USD"
  )
);

/*Це я просто підглянув у вас на сайті, і вирішив зробити так само, але зі своїми додатковими умовами
 Я просто пробував рекурсію і методи масивів, і вирішив зробити такий варіант, якщо ви не проти, якщо так, то видаліть цей коментар
*/
const arrNumber: (number | number[])[] = [
  1,
  2,
  3,
  4,
  [1, 25, 8, 7, 456],
  5,
  6,
  7,
  8,
  9,
  [34, 56, 23, 8, 0, 9],
  10
];

const flat = (arr: (number | number[])[], newArr: number[] = []): number[] => {
  for (const item of arr) {
    if (Array.isArray(item)) {
      flat(item, newArr);
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};

console.log(flat(arrNumber));

const fullName: string = "Лесьо Роман Володимирович";

const arrString: string = fullName
  .split(" ")
  .map((name) => name[0].toUpperCase())
  .join("");
const avatarWrapper = document.createElement("div");
avatarWrapper.classList.add("avatar-wrapper");

const text = document.createElement("p");
const avatar = document.createElement("img");

avatar.src =
  "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg";
avatar.alt = "Google";
avatar.classList.add("avatar");

text.style.color = navigator.onLine ? "green" : "red";

text.innerText = arrString;
avatarWrapper.appendChild(avatar);
avatarWrapper.appendChild(text);
document.body.appendChild(avatarWrapper);
