/*
- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
*/
/*
Helpers function for rendering carts
*/
var createElement = function (typeElement, classLists, content) {
    var element = document.createElement(typeElement);
    if (classLists && Array.isArray(classLists)) {
        classLists.forEach(function (classList) {
            element.classList.add(classList);
        });
    }
    element.textContent = content;
    return element;
};
var currentPage = 1;
var itemsPerPage = 5;
var cartsWrapper = document.getElementById("carts");
cartsWrapper.classList.add("cradsWrapper");
var paginationWrapper = document.getElementById("pagination");
function fetchCarts(page) {
    fetch("https://dummyjson.com/carts")
        .then(function (value) { return value.json(); })
        .then(function (_a) {
        var total = _a.total, carts = _a.carts, limit = _a.limit, skip = _a.skip;
        console.log("total: ".concat(total, " limit: ").concat(limit, " skip: ").concat(skip));
        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = page * itemsPerPage;
        var paginatedCarts = carts.slice(startIndex, endIndex);
        cartsWrapper.innerHTML = "";
        paginatedCarts.forEach(function (cart) {
            var cartDiv = createElement("div", ["cartDiv"], "");
            var amountWrapper = createElement("div", ["amountWrapper"], "");
            var id = createElement("span", ["cardId"], "id: ".concat(cart.id));
            var discountedTotal = createElement("p", ["discountedTotal"], "discountedTotal: ".concat(cart.discountedTotal));
            var total = createElement("p", ["total"], "total: ".concat(cart.total));
            var totalProducts = createElement("p", ["totalProducts"], "totalProducts: ".concat(cart.totalProducts));
            var totalQuantity = createElement("p", ["totalQuantity"], "totalQuantity: ".concat(cart.totalQuantity));
            var productsWrapper = createElement("div", ["productsWrapper"], "");
            var productsTitle = createElement("h3", ["productsTitle"], "Products");
            cart.products.forEach(function (product) {
                var productWrapper = createElement("div", ["productWrapper"], "");
                var productTitle = createElement("h4", ["productTitle"], product.title);
                var productImage = createElement("img", ["productImage"], "");
                productImage.src = product.thumbnail;
                productWrapper.appendChild(productTitle);
                productWrapper.appendChild(productImage);
                productsWrapper.appendChild(productWrapper);
            });
            amountWrapper.appendChild(discountedTotal);
            amountWrapper.appendChild(total);
            amountWrapper.appendChild(totalProducts);
            amountWrapper.appendChild(totalQuantity);
            var orderButtonWrapper = createElement("div", ["orderButtonWrapper"], "");
            var orderButton = createElement("button", ["orderButton"], "Order");
            orderButton.addEventListener("click", function () {
                alert("Order is successful");
            });
            var clearBasketButton = createElement("button", ["clearBasketButton"], "Clear");
            clearBasketButton.addEventListener("click", function () {
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
        var totalPages = Math.ceil(carts.length / itemsPerPage);
        var _loop_1 = function (i) {
            var button = createElement("button", ["paginationButton"], "".concat(i));
            if (i === page) {
                button.classList.add("active");
            }
            button.addEventListener("click", function () {
                currentPage = i;
                fetchCarts(i);
            });
            paginationWrapper.appendChild(button);
        };
        for (var i = 1; i <= totalPages; i++) {
            _loop_1(i);
        }
    });
}
document.addEventListener("DOMContentLoaded", function () { return fetchCarts(currentPage); });
/*
- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
*/
var limit = 3;
var recipesWrapper = document.getElementById("recipes");
function fetchRecipes() {
    fetch("https://dummyjson.com/recipes?limit=".concat(limit))
        .then(function (value) { return value.json(); })
        .then(function (_a) {
        var recipes = _a.recipes;
        recipesWrapper.innerHTML = ""; // Очистка попереднього контенту
        recipesWrapper.classList.add("recipeWrapper");
        var _loop_2 = function (recipe) {
            var div = document.createElement("div");
            div.classList.add("recipeDiv");
            var imageWrapper = document.createElement("div");
            imageWrapper.classList.add("imageWrapper");
            var image = document.createElement("img");
            image.src = recipe.image;
            imageWrapper.appendChild(image);
            var contentWrapper = document.createElement("div");
            contentWrapper.classList.add("contentWrapper");
            var tittle = document.createElement("h2");
            tittle.classList.add("recipeTittle");
            tittle.innerText = recipe.name;
            var rating = document.createElement("p");
            rating.classList.add("rating");
            rating.innerText = "Rating: ".concat(recipe.rating);
            var ingredientsWrapper = document.createElement("div");
            ingredientsWrapper.classList.add("ingredientsWrapper");
            var ingredientsTitle = document.createElement("h3");
            ingredientsTitle.className = "title";
            ingredientsTitle.innerText = "Ingredients";
            var ingredients = document.createElement("div");
            ingredients.classList.add("ingredientsList");
            recipe.ingredients.forEach(function (ingredient) {
                var p = document.createElement("p");
                p.innerText = ingredient;
                ingredients.appendChild(p);
            });
            ingredientsWrapper.appendChild(ingredientsTitle);
            ingredientsWrapper.appendChild(ingredients);
            var instructionsWrapper = document.createElement("div");
            instructionsWrapper.classList.add("instructionsWrapper");
            var instructionsTitle = document.createElement("h3");
            instructionsTitle.className = "title";
            instructionsTitle.innerText = "Instructions";
            var instructions = document.createElement("div");
            instructions.classList.add("instructionsList");
            recipe.instructions.forEach(function (instruction) {
                var p = document.createElement("p");
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
        };
        for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
            var recipe = recipes_1[_i];
            _loop_2(recipe);
        }
        var button = document.createElement("button");
        button.innerText = "Load more";
        button.classList.add("loadMore");
        button.addEventListener("click", function () {
            limit += 3;
            fetchRecipes(); // Виклик функції для оновлення списку
        });
        recipesWrapper.appendChild(button);
    });
}
document.addEventListener("DOMContentLoaded", fetchRecipes);
function handleUserDetail(id) {
    window.location.href = "userDetail.html?id=".concat(id);
}
function userRender(user) {
    var usersWrapper = document.getElementById("users");
    usersWrapper.classList.add("usersWrapper");
    var div = document.createElement("div");
    div.classList.add("userDiv");
    div.addEventListener("click", function () { return handleUserDetail(user.id); });
    var a = document.createElement("a");
    a.innerText = "".concat(user.id, " ").concat(user.name);
    var email = document.createElement("p");
    email.classList.add("email");
    email.innerText = user.email;
    var phone = document.createElement("p");
    phone.classList.add("phone");
    phone.innerText = user.phone;
    var website = document.createElement("p");
    website.classList.add("website");
    website.innerText = user.website;
    // div.appendChild(email);
    // div.appendChild(phone);
    // div.appendChild(website);
    div.appendChild(a);
    usersWrapper.appendChild(div);
}
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (value) { return value.json(); })
    .then(function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        userRender(user);
    }
});
var renderUserProperties = function (elementClasNames, value, label, labelClassNames, rootElement) {
    var elementWrapper = document.createElement("div");
    var element = document.createElement("p");
    var labelElement = document.createElement("span");
    if (labelClassNames && Array.isArray(labelClassNames)) {
        labelClassNames.map(function (className) {
            labelElement.classList.add(className);
        });
    }
    labelElement.textContent = "".concat(label !== null && label !== void 0 ? label : "label", ":");
    if (elementClasNames && Array.isArray(elementClasNames)) {
        elementClasNames.map(function (className) {
            element.classList.add(className);
        });
    }
    element.textContent = "".concat(value !== null && value !== void 0 ? value : "N/A");
    elementWrapper.appendChild(labelElement);
    elementWrapper.appendChild(element);
    rootElement.appendChild(elementWrapper);
};
var findElement = function (className, classLists, content) {
    var element = document.querySelector(className);
    if (classLists && Array.isArray(classLists)) {
        classLists.map(function (classList) {
            element.classList.add(classList);
        });
    }
    if (content) {
        element.textContent = content;
    }
    return element;
};
var openPosts = function (commentsButton) {
    var usersPosts = document.querySelector(".users-posts");
    if (usersPosts) {
        usersPosts.classList.toggle("hidden");
        commentsButton.textContent = "Comments";
        if (usersPosts.classList.contains("hidden")) {
            commentsButton.textContent = "Comments";
        }
        else {
            commentsButton.textContent = "Hide";
        }
    }
};
var userId = new URLSearchParams(window.location.search).get("id");
fetch("https://jsonplaceholder.typicode.com/users/".concat(userId))
    .then(function (value) { return value.json(); })
    .then(function (currentUser) {
    if (currentUser) {
        var userDetails = findElement(".user-details");
        var mainTitleWrapper = findElement(".main-title");
        var mainTitle = createElement("h1", ["main-title"], "User Details: ".concat(currentUser.name));
        mainTitleWrapper.appendChild(mainTitle);
        for (var property in currentUser) {
            if (typeof currentUser[property] === "object" &&
                !Array.isArray(currentUser[property])) {
                var nestedObject = currentUser[property];
                for (var nestedProperty in nestedObject) {
                    if (typeof nestedObject[nestedProperty] === "object" &&
                        !Array.isArray(nestedObject[nestedProperty])) {
                        var deeplyNestedObject = nestedObject[nestedProperty];
                        for (var deeplyNestedProperty in deeplyNestedObject) {
                            renderUserProperties(["text", "textColorBlue"], deeplyNestedObject[deeplyNestedProperty], "".concat(property, ".").concat(nestedProperty, ".").concat(deeplyNestedProperty), ["label"], userDetails);
                        }
                    }
                    else {
                        renderUserProperties(["text", "textColorGreen"], nestedObject[nestedProperty], "".concat(property, ".").concat(nestedProperty), ["label"], userDetails);
                    }
                }
            }
            else {
                renderUserProperties(["text", "textColorRed"], currentUser[property], property, ["label"], userDetails);
            }
        }
        var buttonWrapper = createElement("div", ["button-wrapper"], "");
        var commentsButton_1 = createElement("button", ["userDetail-button"], "Comments");
        commentsButton_1.addEventListener("click", function () {
            openPosts(commentsButton_1);
        });
        var backButton = createElement("button", ["userDetail-button"], "Back");
        backButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
        buttonWrapper.appendChild(backButton);
        userDetails.appendChild(buttonWrapper);
    }
    else {
        console.error("Current user data not found.");
    }
})
    .catch(function (error) { return console.error("Error fetching current user:", error); });
