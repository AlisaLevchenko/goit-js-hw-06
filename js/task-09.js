// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль
// при клике на button.change - color и выводит значение цвета в span.color.

const body = document.querySelector("body");
console.log(body);
const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener("click", changeColor);

function changeColor(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
}
