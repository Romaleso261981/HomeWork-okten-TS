var form = document.getElementById("userForm1");
var btn = document.getElementById("btn");
btn.onclick = function () {
  var name = form.elements.namedItem("name").value;
  var surname = form.elements.namedItem("surname").value;
  var age = form.elements.namedItem("age").value;
  var user = {
    name: name,
    surname: surname,
    age: Number(age)
  };
  var result = document.getElementById("result");
  var div = document.createElement("div");
  div.classList.add("userDiv");
  var nameSpan = document.createElement("span");
  nameSpan.style.marginRight = "10px";
  nameSpan.textContent = "User: ".concat(name);
  div.appendChild(nameSpan);
  var surnameSpan = document.createElement("span");
  surnameSpan.style.marginRight = "10px";
  surnameSpan.textContent = "Surname: ".concat(surname);
  div.appendChild(surnameSpan);
  var ageSpan = document.createElement("span");
  ageSpan.style.marginRight = "10px";
  ageSpan.textContent = "Age: ".concat(age);
  div.appendChild(ageSpan);
  result.appendChild(div);
};
// 2. Счетчик, увеличивающийся при перезагрузке страницы
var number = document.getElementById("num");
var localCount = localStorage.getItem("count261981");
var c = localCount ? JSON.parse(localCount) : 1;
window.onload = function () {
  c += 1;
  localStorage.setItem("count261981", JSON.stringify(c));
  if (number) {
    number.textContent = c.toString();
  }
};
// 3. Сохранение сессий в localStorage
var button3 = document.getElementById("button3");
button3.onclick = function () {
  var sessions = JSON.parse(localStorage.getItem("sessions") || "[]");
  sessions.push(new Date().toISOString());
  localStorage.setItem("sessions", JSON.stringify(sessions));
  window.location.href = "sessions.html";
};
// 4. Пагинация массива из 100 объектов
var container = document.getElementById("container4");
var buttonWrapper = document.getElementById("buttonWrapper");
if (buttonWrapper) {
  buttonWrapper.style.display = "flex";
  buttonWrapper.style.justifyContent = "center";
  buttonWrapper.style.margin = "10px";
}
var prev = document.getElementById("prev");
if (prev) {
  prev.style.display = "none";
  prev.style.width = "100px";
  prev.style.height = "50px";
  prev.style.marginRight = "10px";
}
var next = document.getElementById("next");
if (next) {
  next.style.height = "50px";
  next.style.width = "100px";
}
var users = Array.from({ length: 100 }, function (_, i) {
  return {
    id: i + 1,
    name: "user ".concat(i + 1)
  };
});
var currentPage2 = 1;
var itemsPerPage2 = 10;
function renderPage(page) {
  if (!container) return;
  container.innerHTML = "";
  var start = (page - 1) * itemsPerPage2;
  var end = page * itemsPerPage2;
  var currentUsers = users.slice(start, end);
  currentUsers.forEach(function (user) {
    var div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = "80vw";
    div.style.height = "100px";
    div.style.margin = "5px";
    div.style.padding = "5px";
    div.style.boxShadow = "0 0 5px 0 black";
    var span = document.createElement("span");
    span.style.marginRight = "10px";
    span.textContent = user.id.toString();
    div.appendChild(span);
    var strong = document.createElement("strong");
    strong.style.marginRight = "10px";
    strong.textContent = user.name;
    div.appendChild(strong);
    container.appendChild(div);
  });
  if (prev) {
    prev.style.display = page === 1 ? "none" : "block";
    prev.onclick = function () {
      if (currentPage2 > 1) {
        currentPage2--;
        renderPage(currentPage2);
      }
    };
  }
  if (next) {
    next.style.display =
      page * itemsPerPage2 >= users.length ? "none" : "block";
    next.onclick = function () {
      if (currentPage2 * itemsPerPage2 < users.length) {
        currentPage2++;
        renderPage(currentPage2);
      }
    };
  }
}
renderPage(currentPage2);
// 5. Кнопка для скрытия элемента с id = text
var div5 = document.getElementsByClassName("root")[0];
var button5 = document.createElement("button");
button5.textContent = "Hide";
div5.appendChild(button5);
var p = document.getElementById("text");
button5.onclick = function () {
  p.style.display = "none";
};
// 6. Инпут для проверки возраста
var input = document.getElementById("age");
var button6 = document.getElementById("button10/6");
button6.onclick = function () {
  var age = +input.value;
  if (age < 18) {
    alert("You are under 18");
  } else {
    alert("You are over 18");
  }
  input.value = "";
};
// 7. Таблица на основе ввода пользователя
var rows = document.getElementById("rows");
var cols = document.getElementById("cols");
var content = document.getElementById("content");
var button = document.getElementById("button");
button.onclick = function () {
  var rowsValue = Number(rows.value);
  var colsValue = Number(cols.value);
  var contentValue = content.value;
  var table = document.createElement("table");
  for (var i = 0; i < rowsValue; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < colsValue; j++) {
      var td = document.createElement("td");
      td.textContent = contentValue;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
};
// 8. Увеличение значения с учетом интервала
var div = document.getElementById("div");
var price = document.getElementById("price");
var interval = 10000;
var currentlocalData = JSON.parse(localStorage.getItem("amountData") || "{}");
if (!currentlocalData.amount) {
  localStorage.setItem(
    "amountData",
    JSON.stringify({ amount: 100, lastVisit: Date.now() })
  );
  price.textContent = "100";
} else {
  price.textContent = currentlocalData.amount;
}
window.onload = function () {
  var data = JSON.parse(localStorage.getItem("amountData") || "{}");
  if (data.lastVisit && data.lastVisit < Date.now() - interval) {
    var newAmount = data.amount + 10;
    price.textContent = newAmount;
    localStorage.setItem(
      "amountData",
      JSON.stringify({ amount: newAmount, lastVisit: Date.now() })
    );
  } else {
    console.log(
      "You can't add 10, because you reloaded the page earlier than 10 seconds ago"
    );
  }
};
