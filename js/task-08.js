// Напиши скрипт управления формой логина.

// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму,
//     собери значения полей в обьект, где имя поля будет именем свойства,
//     а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector(".login-form");
// console.log(formEl.elements);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!formEl.elements[0].value || !formEl.elements[1].value) {
    alert("Все поля должны быть заполнены");
  } else {
    const email = formEl.elements[0].name;
    const password = formEl.elements[0].name;
    const params = {
      email: formEl.elements[0].value,
      password: formEl.elements[1].value,
    };
    console.log(params);
    formEl.reset();
  }
}
