const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredientsAll = document.querySelector("#ingredients");
const ingredientEl = "";

const ingredientsHtml = ingredients.map((ingredient) => {
  console.log(ingredient);
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  return ingredientEl;
});
console.log(ingredientsHtml);
ingredientsAll.append(...ingredientsHtml);

// const ingredientArr = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = document.createElement("li");
//   console.log(ingredient);
//   ingredient.textContent = ingredients[i];
//   ingredient.classList.add("item");
//   ingredientArr.push(ingredient);
// }
// ingredientsAll.append(...ingredientArr);
