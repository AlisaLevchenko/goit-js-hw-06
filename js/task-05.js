// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
//     Если инпут пустой, в спане должна отображаться строка "Anonymous".

// опрределили переменную
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputChange = function (text) {
  console.log(text.currentTarget.value);
  output.textContent = input.value ? text.currentTarget.value : "Anonymous";
};
input.addEventListener("input", inputChange);

////
// console.log(output.textContent);
