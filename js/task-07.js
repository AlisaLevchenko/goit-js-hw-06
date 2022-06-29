// Напиши скрипт, который реагирует на изменение значения input#font - size - control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector("#font-size-control");
// console.log(inputEl);
const textSize = document.querySelector("#text");
// console.log(textSize);

inputEl.addEventListener("input", (event) => {
  console.log(textSize.style.fontSize);
  textSize.style.fontSize = event.target.value + "px";
});
