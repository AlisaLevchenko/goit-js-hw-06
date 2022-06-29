// Счетчик состоит из спана и кнопок, которые, при клике,
//     должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const buttons = document.querySelectorAll("#counter button");
// console.log(buttons[0]);
const valueEl = document.querySelector("#value");
// console.log(valueEl);

const decrBtn = buttons[0];
const incrBtn = buttons[1];

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decriment() {
    this.counterValue -= 1;
  },
};

decrBtn.addEventListener("click", function () {
  counter.decriment();
  //   console.log(counter);
  valueEl.textContent = counter.counterValue;
});

incrBtn.addEventListener("click", function () {
  counter.increment();
  //   console.log(counter);
  valueEl.textContent = counter.counterValue;
});
