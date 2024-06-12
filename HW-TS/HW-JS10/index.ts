// // 1. Форма для name, surname, age

// const form = document.getElementById("userForm1") as HTMLFormElement;
// const btn = document.getElementById("btn") as HTMLButtonElement;

// btn.onclick = () => {
//   const name = (form.elements.namedItem("name") as HTMLInputElement).value;
//   const surname = (form.elements.namedItem("surname") as HTMLInputElement)
//     .value;
//   const age = (form.elements.namedItem("age") as HTMLInputElement).value;

//   const user = {
//     name,
//     surname,
//     age: Number(age)
//   };

//   const result = document.getElementById("result") as HTMLElement;
//   const div = document.createElement("div");
//   div.classList.add("userDiv");

//   const nameSpan = document.createElement("span");
//   nameSpan.style.marginRight = "10px";
//   nameSpan.textContent = `User: ${name}`;
//   div.appendChild(nameSpan);

//   const surnameSpan = document.createElement("span");
//   surnameSpan.style.marginRight = "10px";
//   surnameSpan.textContent = `Surname: ${surname}`;
//   div.appendChild(surnameSpan);

//   const ageSpan = document.createElement("span");
//   ageSpan.style.marginRight = "10px";
//   ageSpan.textContent = `Age: ${age}`;
//   div.appendChild(ageSpan);

//   result.appendChild(div);
// };

// // 2. Счетчик, увеличивающийся при перезагрузке страницы

// const number = document.getElementById("num") as HTMLElement;
// const localCount = localStorage.getItem("count261981");
// let c: number = localCount ? JSON.parse(localCount) : 1;

// window.onload = () => {
//   c += 1;
//   localStorage.setItem("count261981", JSON.stringify(c));
//   if (number) {
//     number.textContent = c.toString();
//   }
// };

// // 3. Сохранение сессий в localStorage

// const button3 = document.getElementById("button3") as HTMLButtonElement;

// button3.onclick = () => {
//   const sessions = JSON.parse(localStorage.getItem("sessions") || "[]");
//   sessions.push(new Date().toISOString());
//   localStorage.setItem("sessions", JSON.stringify(sessions));
//   window.location.href = "sessions.html";
// };

// // 4. Пагинация массива из 100 объектов

// const container = document.getElementById("container4") as HTMLElement;
// const buttonWrapper = document.getElementById("buttonWrapper") as HTMLElement;
// if (buttonWrapper) {
//   buttonWrapper.style.display = "flex";
//   buttonWrapper.style.justifyContent = "center";
//   buttonWrapper.style.margin = "10px";
// }

// const prev = document.getElementById("prev") as HTMLButtonElement;
// if (prev) {
//   prev.style.display = "none";
//   prev.style.width = "100px";
//   prev.style.height = "50px";
//   prev.style.marginRight = "10px";
// }

// const next = document.getElementById("next") as HTMLButtonElement;
// if (next) {
//   next.style.height = "50px";
//   next.style.width = "100px";
// }

// const users = Array.from({ length: 100 }, (_, i) => ({
//   id: i + 1,
//   name: `user ${i + 1}`
// }));

// let currentPage2 = 1;
// const itemsPerPage2 = 10;

// // function renderPage(page: number) {
// //   if (!container) return;
// //   container.innerHTML = "";

// //   const start = (page - 1) * itemsPerPage2;
// //   const end = page * itemsPerPage2;
// //   const currentUsers = users.slice(start, end);

// //   currentUsers.forEach((user) => {
// //     const div = document.createElement("div");
// //     div.style.border = "1px solid black";
// //     div.style.width = "80vw";
// //     div.style.height = "100px";
// //     div.style.margin = "5px";
// //     div.style.padding = "5px";
// //     div.style.boxShadow = "0 0 5px 0 black";

// //     const span = document.createElement("span");
// //     span.style.marginRight = "10px";
// //     span.textContent = user.id.toString();
// //     div.appendChild(span);

// //     const strong = document.createElement("strong");
// //     strong.style.marginRight = "10px";
// //     strong.textContent = user.name;
// //     div.appendChild(strong);

// //     container.appendChild(div);
// //   });

// //   if (prev) {
// //     prev.style.display = page === 1 ? "none" : "block";
// //     prev.onclick = () => {
// //       if (currentPage2 > 1) {
// //         currentPage2--;
// //         renderPage(currentPage2);
// //       }
// //     };
// //   }

// //   if (next) {
// //     next.style.display =
// //       page * itemsPerPage2 >= users.length ? "none" : "block";
// //     next.onclick = () => {
// //       if (currentPage2 * itemsPerPage2 < users.length) {
// //         currentPage2++;
// //         renderPage(currentPage2);
// //       }
// //     };
// //   }
// // }

// renderPage(currentPage2);

// // 5. Кнопка для скрытия элемента с id = text

// const div5 = document.getElementsByClassName("root")[0] as HTMLElement;
// const button5 = document.createElement("button");

// button5.textContent = "Hide";
// div5.appendChild(button5);

// const p = document.getElementById("text") as HTMLElement;

// button5.onclick = () => {
//   p.style.display = "none";
// };

// // 6. Инпут для проверки возраста

// const input = document.getElementById("age") as HTMLInputElement;
// const button6 = document.getElementById("button10/6") as HTMLButtonElement;

// button6.onclick = () => {
//   const age: number = +input.value;
//   if (age < 18) {
//     alert("You are under 18");
//   } else {
//     alert("You are over 18");
//   }

//   input.value = "";
// };

// // 7. Таблица на основе ввода пользователя

// const rows = document.getElementById("rows") as HTMLInputElement;
// const cols = document.getElementById("cols") as HTMLInputElement;
// const content = document.getElementById("content") as HTMLInputElement;
// const button = document.getElementById("button") as HTMLButtonElement;

// button.onclick = () => {
//   const rowsValue = Number(rows.value);
//   const colsValue = Number(cols.value);
//   const contentValue = content.value;

//   const table = document.createElement("table");

//   for (let i = 0; i < rowsValue; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < colsValue; j++) {
//       const td = document.createElement("td");
//       td.textContent = contentValue;
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }

//   document.body.appendChild(table);
// };

// // 8. Увеличение значения с учетом интервала

// const div = document.getElementById("div") as HTMLElement;
// const price = document.getElementById("price") as HTMLElement;
// const interval: number = 10000;

// const currentlocalData = JSON.parse(localStorage.getItem("amountData") || "{}");
// if (!currentlocalData.amount) {
//   localStorage.setItem(
//     "amountData",
//     JSON.stringify({ amount: 100, lastVisit: Date.now() })
//   );
//   price.textContent = "100";
// } else {
//   price.textContent = currentlocalData.amount;
// }

// window.onload = () => {
//   const data = JSON.parse(localStorage.getItem("amountData") || "{}");

//   if (data.lastVisit && data.lastVisit < Date.now() - interval) {
//     const newAmount = data.amount + 10;
//     price.textContent = newAmount;
//     localStorage.setItem(
//       "amountData",
//       JSON.stringify({ amount: newAmount, lastVisit: Date.now() })
//     );
//   } else {
//     console.log(
//       "You can't add 10, because you reloaded the page earlier than 10 seconds ago"
//     );
//   }
// };
