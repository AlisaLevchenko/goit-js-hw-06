// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должны иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  console.log(amount);
  for (let i = 1; i <= amount; i += 1) {
    const creatingBox = document.createElement("div");
    creatingBox.style.backgroundColor = getRandomHexColor();
    creatingBox.style.width = i * 10 + 20 + "px";
    creatingBox.style.height = i * 10 + 20 + "px";
    boxes.insertAdjacentElement("beforeend", creatingBox);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
