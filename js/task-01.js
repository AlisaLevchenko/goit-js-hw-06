// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const animalCategoriesList = document.querySelector("#categories");
console.log("Number of categories:", animalCategoriesList.children.length);

const itemsAll = document.querySelectorAll("#categories .item");
// console.log(itemsAll);
itemsAll.forEach((el) => {
  const titleEl = el.querySelector("h2");
  const listEl = el.querySelector("ul");
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${listEl.children.length}`);
});

// const animalList = document.querySelectorAll(".item");
// console.log("Number of categories:", animalList.length);

// const categoryName = document.querySelectorAll("#categories h2");

// const list = document.querySelectorAll("#categories ul");
// const elements = [];
// const listEl = list.forEach((fooList) => {
//   elements.push(fooList.children.length);
// });
// console.log("Category:", categoryName[0].textContent);
// console.log("Elements:", elements[0]);

// console.log("Category:", categoryName[1].textContent);
// console.log("Elements:", elements[1]);

// console.log("Category:", categoryName[2].textContent);
// console.log("Elements:", elements[2]);
