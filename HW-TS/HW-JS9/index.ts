// // - створити блок,
// // - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.

// const block: HTMLDivElement = document.createElement("div");

// const text: Text = document.createTextNode("Hello World");

// block.appendChild(text);

// block.classList.add("wrap", "collapse", "alpha", "beta");

// block.style.backgroundColor = "red";
// block.style.color = "white";
// block.style.width = "100%";
// block.style.height = "30vh";
// block.style.fontSize = "20px";

// document.body.appendChild(block);

// // - клонувати його повністю, та додати клон в body.

// const cloneBlock: Node = block.cloneNode(true);

// document.body.appendChild(cloneBlock);

// // - Є масив:
// // ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// const array: string[] = ["Main", "Products", "About us", "Contacts"];

// const ul: HTMLUListElement = document.createElement("ul");

// array.forEach((item) => {
//   const li: HTMLLIElement = document.createElement("li");
//   const p: HTMLParagraphElement = document.createElement("p");
//   p.innerText = item;
//   li.appendChild(p);
//   ul.appendChild(li);
// });

// document.body.appendChild(ul);

// // - Є масив
// // let coursesAndDurationArray = [
// // {title: 'JavaScript Complex', monthDuration: 5},
// // {title: 'Java Complex', monthDuration: 6},
// // {title: 'Python Complex', monthDuration: 6},
// // {title: 'QA Complex', monthDuration: 4},
// // {title: 'FullStack', monthDuration: 7},
// // {title: 'Frontend', monthDuration: 4}
// // ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.

// type Course = {
//   title: string;
//   monthDuration: number;
// };

// const coursesAndDurationArray: Course[] = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 }
// ];

// coursesAndDurationArray.forEach((course) => {
//   const div: HTMLDivElement = document.createElement("div");
//   div.classList.add("item");
//   const h2: HTMLHeadingElement = document.createElement("h2");
//   const span: HTMLSpanElement = document.createElement("span");
//   h2.innerText = course.title;
//   span.innerText = course.monthDuration.toString();
//   div.appendChild(h2);
//   div.appendChild(span);
//   document.body.appendChild(div);
// });

// // - Є масив
// // let coursesAndDurationArray = [
// // {title: 'JavaScript Complex', monthDuration: 5},
// // {title: 'Java Complex', monthDuration: 6},
// // {title: 'Python Complex', monthDuration: 6},
// // {title: 'QA Complex', monthDuration: 4},
// // {title: 'FullStack', monthDuration: 7},
// // {title: 'Frontend', monthDuration: 4}
// // ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// // Завдання робити через цикли.

// coursesAndDurationArray.forEach((course) => {
//   const div: HTMLDivElement = document.createElement("div");
//   div.classList.add("item");
//   const h1: HTMLHeadingElement = document.createElement("h1");
//   h1.classList.add("heading");
//   const p: HTMLParagraphElement = document.createElement("p");
//   p.classList.add("description");
//   h1.innerText = course.title;
//   p.innerText = course.monthDuration.toString();
//   div.appendChild(h1);
//   div.appendChild(p);
//   document.body.appendChild(div);
// });

// // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Проітерувати його, створиши для кожного об'єкту масиву <div class='member'> та наповнити його данними з об'єкту.
// // Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// type Simpson = {
//   name: string;
//   surname: string;
//   age: number;
//   info: string;
//   photo: string;
// };

// const simpsons: Simpson[] = [
//   {
//     name: "Bart",
//     surname: "Simpson",
//     age: 10,
//     info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
//     photo: "https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"
//   },
//   {
//     name: "Homer",
//     surname: "Simpson",
//     age: 40,
//     info: "Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.",
//     photo:
//       "http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
//   },
//   {
//     name: "Marge",
//     surname: "Simpson",
//     age: 38,
//     info: "Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.",
//     photo: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"
//   },
//   {
//     name: "Lisa",
//     surname: "Simpson",
//     age: 9,
//     info: "Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.",
//     photo: "https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png"
//   },
//   {
//     name: "Maggie",
//     surname: "Simpson",
//     age: 1,
//     info: "Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебютировав 17 декабря 1989 года.",
//     photo: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png"
//   }
// ];

// simpsons.forEach((simpson) => {
//   const div: HTMLDivElement = document.createElement("div");
//   div.classList.add("member");
//   const h1: HTMLHeadingElement = document.createElement("h1");
//   h1.innerText = `${simpson.name} ${simpson.surname}`;
//   const p: HTMLParagraphElement = document.createElement("p");
//   p.innerText = simpson.info;
//   const img: HTMLImageElement = document.createElement("img");
//   img.src = simpson.photo;
//   div.appendChild(h1);
//   div.appendChild(p);
//   div.appendChild(img);
//   document.body.appendChild(div);
// });
