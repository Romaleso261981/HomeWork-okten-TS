/*
- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
*/

/*
Helpers function for rendering carts
*/
const createElement = (
  typeElement: string,
  classLists: string[],
  content: string
): HTMLElement => {
  const element = document.createElement(typeElement);
  if (classLists && Array.isArray(classLists)) {
    classLists.forEach((classList) => {
      element.classList.add(classList);
    });
  }
  element.textContent = content;
  return element;
};

let currentPage = 1;
const itemsPerPage = 5;
const cartsWrapper = document.getElementById("carts") as HTMLElement;
cartsWrapper.classList.add("cradsWrapper");
const paginationWrapper = document.getElementById("pagination") as HTMLElement;

type Product = {
  id: string;
  title: string;
  thumbnail: string;
};

type Cards = {
  id: string;
  discountedTotal: number;
  total: number;
  totalProducts: number;
  totalQuantity: number;
  products: Product[];
};

function fetchCarts(page: number) {
  fetch("https://dummyjson.com/carts")
    .then((value) => value.json())
    .then(
      ({
        total,
        carts,
        limit,
        skip
      }: {
        total: number;
        carts: Cards[];
        limit: number;
        skip: number;
      }) => {
        console.log(`total: ${total} limit: ${limit} skip: ${skip}`);
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        const paginatedCarts = carts.slice(startIndex, endIndex);

        cartsWrapper.innerHTML = "";
        paginatedCarts.forEach((cart) => {
          const cartDiv = createElement("div", ["cartDiv"], "");
          const amountWrapper = createElement("div", ["amountWrapper"], "");
          const id = createElement("span", ["cardId"], `id: ${cart.id}`);
          const discountedTotal = createElement(
            "p",
            ["discountedTotal"],
            `discountedTotal: ${cart.discountedTotal}`
          );
          const total = createElement("p", ["total"], `total: ${cart.total}`);
          const totalProducts = createElement(
            "p",
            ["totalProducts"],
            `totalProducts: ${cart.totalProducts}`
          );
          const totalQuantity = createElement(
            "p",
            ["totalQuantity"],
            `totalQuantity: ${cart.totalQuantity}`
          );
          const productsWrapper = createElement("div", ["productsWrapper"], "");
          const productsTitle = createElement(
            "h3",
            ["productsTitle"],
            "Products"
          );

          cart.products.forEach((product) => {
            const productWrapper = createElement("div", ["productWrapper"], "");
            const productTitle = createElement(
              "h4",
              ["productTitle"],
              product.title
            );

            const productImage = createElement(
              "img",
              ["productImage"],
              ""
            ) as HTMLImageElement;
            productImage.src = product.thumbnail;

            productWrapper.appendChild(productTitle);
            productWrapper.appendChild(productImage);

            productsWrapper.appendChild(productWrapper);
          });

          amountWrapper.appendChild(discountedTotal);
          amountWrapper.appendChild(total);
          amountWrapper.appendChild(totalProducts);
          amountWrapper.appendChild(totalQuantity);

          const orderButtonWrapper = createElement(
            "div",
            ["orderButtonWrapper"],
            ""
          );
          const orderButton = createElement("button", ["orderButton"], "Order");
          orderButton.addEventListener("click", () => {
            alert("Order is successful");
          });
          const clearBasketButton = createElement(
            "button",
            ["clearBasketButton"],
            "Clear"
          );
          clearBasketButton.addEventListener("click", () => {
            alert("Basket is cleared");
          });

          orderButtonWrapper.appendChild(orderButton);
          orderButtonWrapper.appendChild(clearBasketButton);

          cartDiv.appendChild(productsWrapper);
          cartDiv.appendChild(amountWrapper);
          cartDiv.appendChild(orderButtonWrapper);

          cartsWrapper.appendChild(cartDiv);
        });

        paginationWrapper.innerHTML = "";
        paginationWrapper.classList.add("paginationWrapper");
        const totalPages = Math.ceil(carts.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
          const button = createElement("button", ["paginationButton"], `${i}`);
          if (i === page) {
            button.classList.add("active");
          }
          button.addEventListener("click", () => {
            currentPage = i;
            fetchCarts(i);
          });
          paginationWrapper.appendChild(button);
        }
      }
    );
}

document.addEventListener("DOMContentLoaded", () => fetchCarts(currentPage));

/*
- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
*/

let limit = 3;
const recipesWrapper = document.getElementById("recipes") as HTMLElement;

type Recipes = {
  id: string;
  name: string;
  image: string;
  rating: number;
  ingredients: string[];
  instructions: string[];
};

function fetchRecipes() {
  fetch(`https://dummyjson.com/recipes?limit=${limit}`)
    .then((value) => value.json())
    .then(({ recipes }: { recipes: Recipes[] }) => {
      recipesWrapper.innerHTML = ""; // Очистка попереднього контенту
      recipesWrapper.classList.add("recipeWrapper");

      for (const recipe of recipes) {
        const div = document.createElement("div");
        div.classList.add("recipeDiv");

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("imageWrapper");
        const image = document.createElement("img");
        image.src = recipe.image;
        imageWrapper.appendChild(image);

        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("contentWrapper");

        const tittle = document.createElement("h2");
        tittle.classList.add("recipeTittle");
        tittle.innerText = recipe.name;

        const rating = document.createElement("p");
        rating.classList.add("rating");
        rating.innerText = `Rating: ${recipe.rating}`;

        const ingredientsWrapper = document.createElement("div");
        ingredientsWrapper.classList.add("ingredientsWrapper");
        const ingredientsTitle = document.createElement("h3");
        ingredientsTitle.className = "title";
        ingredientsTitle.innerText = "Ingredients";

        const ingredients = document.createElement("div");
        ingredients.classList.add("ingredientsList");
        recipe.ingredients.forEach((ingredient) => {
          const p = document.createElement("p");
          p.innerText = ingredient;
          ingredients.appendChild(p);
        });

        ingredientsWrapper.appendChild(ingredientsTitle);
        ingredientsWrapper.appendChild(ingredients);

        const instructionsWrapper = document.createElement("div");
        instructionsWrapper.classList.add("instructionsWrapper");
        const instructionsTitle = document.createElement("h3");
        instructionsTitle.className = "title";
        instructionsTitle.innerText = "Instructions";
        const instructions = document.createElement("div");
        instructions.classList.add("instructionsList");
        recipe.instructions.forEach((instruction) => {
          const p = document.createElement("p");
          p.innerText = instruction;
          instructions.appendChild(p);
        });

        instructionsWrapper.appendChild(instructionsTitle);
        instructionsWrapper.appendChild(instructions);

        contentWrapper.appendChild(tittle);
        contentWrapper.appendChild(rating);
        contentWrapper.appendChild(instructionsWrapper);
        contentWrapper.appendChild(ingredientsWrapper);

        div.appendChild(imageWrapper);
        div.appendChild(contentWrapper);
        recipesWrapper.appendChild(div);
      }

      const button = document.createElement("button");
      button.innerText = "Load more";
      button.classList.add("loadMore");
      button.addEventListener("click", () => {
        limit += 3;
        fetchRecipes(); // Виклик функції для оновлення списку
      });

      recipesWrapper.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", fetchRecipes);

/*
- зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
*/

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

function handleUserDetail(id: number) {
  window.location.href = `userDetail.html?id=${id}`;
}

function userRender(user: User) {
  const usersWrapper = document.getElementById("users") as HTMLElement;
  usersWrapper.classList.add("usersWrapper");

  const div = document.createElement("div");
  div.classList.add("userDiv");
  div.addEventListener("click", () => handleUserDetail(user.id));
  const a = document.createElement("a");
  a.innerText = `${user.id} ${user.name}`;

  const email = document.createElement("p");
  email.classList.add("email");
  email.innerText = user.email;

  const phone = document.createElement("p");
  phone.classList.add("phone");
  phone.innerText = user.phone;

  const website = document.createElement("p");
  website.classList.add("website");
  website.innerText = user.website;

  // div.appendChild(email);
  // div.appendChild(phone);
  // div.appendChild(website);

  div.appendChild(a);

  usersWrapper.appendChild(div);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((value) => value.json())
  .then((users) => {
    for (const user of users) {
      userRender(user);
    }
  });

const renderUserProperties = (
  elementClasNames,
  value?,
  label?,
  labelClassNames?,
  rootElement?
) => {
  const elementWrapper = document.createElement("div");
  const element = document.createElement("p");
  const labelElement = document.createElement("span");

  if (labelClassNames && Array.isArray(labelClassNames)) {
    labelClassNames.map((className) => {
      labelElement.classList.add(className);
    });
  }
  labelElement.textContent = `${label ?? "label"}:`;
  if (elementClasNames && Array.isArray(elementClasNames)) {
    elementClasNames.map((className) => {
      element.classList.add(className);
    });
  }
  element.textContent = `${value ?? "N/A"}`;
  elementWrapper.appendChild(labelElement);
  elementWrapper.appendChild(element);
  rootElement.appendChild(elementWrapper);
};

const findElement = (
  className: string,
  classLists?: string[],
  content?: string
) => {
  let element = document.querySelector(className) as HTMLElement;
  if (classLists && Array.isArray(classLists)) {
    classLists.map((classList) => {
      element.classList.add(classList);
    });
  }
  if (content) {
    element.textContent = content;
  }
  return element;
};
const openPosts = (commentsButton: HTMLButtonElement) => {
  const usersPosts = document.querySelector(".users-posts");
  if (usersPosts) {
    usersPosts.classList.toggle("hidden");
    commentsButton.textContent = "Comments";
    if (usersPosts.classList.contains("hidden")) {
      commentsButton.textContent = "Comments";
    } else {
      commentsButton.textContent = "Hide";
    }
  }
};

const userId = new URLSearchParams(window.location.search).get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then((value) => value.json())
  .then((currentUser) => {
    if (currentUser) {
      const userDetails = findElement(".user-details");
      const mainTitleWrapper = findElement(".main-title");

      const mainTitle = createElement(
        "h1",
        ["main-title"],
        `User Details: ${currentUser.name}`
      );
      mainTitleWrapper.appendChild(mainTitle);

      for (const property in currentUser) {
        if (
          typeof currentUser[property] === "object" &&
          !Array.isArray(currentUser[property])
        ) {
          const nestedObject = currentUser[property];
          for (const nestedProperty in nestedObject) {
            if (
              typeof nestedObject[nestedProperty] === "object" &&
              !Array.isArray(nestedObject[nestedProperty])
            ) {
              const deeplyNestedObject = nestedObject[nestedProperty];
              for (const deeplyNestedProperty in deeplyNestedObject) {
                renderUserProperties(
                  ["text", "textColorBlue"],
                  deeplyNestedObject[deeplyNestedProperty],
                  `${property}.${nestedProperty}.${deeplyNestedProperty}`,
                  ["label"],
                  userDetails
                );
              }
            } else {
              renderUserProperties(
                ["text", "textColorGreen"],
                nestedObject[nestedProperty],
                `${property}.${nestedProperty}`,
                ["label"],
                userDetails
              );
            }
          }
        } else {
          renderUserProperties(
            ["text", "textColorRed"],
            currentUser[property],
            property,
            ["label"],
            userDetails
          );
        }
      }
      const buttonWrapper = createElement(
        "div",
        ["button-wrapper"],
        ""
      ) as HTMLDivElement;

      const commentsButton = createElement(
        "button",
        ["userDetail-button"],
        "Comments"
      ) as HTMLButtonElement;
      commentsButton.addEventListener("click", () => {
        openPosts(commentsButton);
      });

      const backButton = createElement(
        "button",
        ["userDetail-button"],
        "Back"
      ) as HTMLButtonElement;
      backButton.addEventListener("click", () => {
        window.location.href = "index.html";
      });

      buttonWrapper.appendChild(backButton);

      userDetails.appendChild(buttonWrapper);
    } else {
      console.error("Current user data not found.");
    }
  })
  .catch((error) => console.error("Error fetching current user:", error));
