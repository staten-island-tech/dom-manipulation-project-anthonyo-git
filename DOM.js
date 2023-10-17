const DOMSelectors = {
  form: document.querySelector("form"),
  firstName: document.querySelector(".first-name"),
  lastName: document.querySelector(".last-name"),
  age: document.querySelector(".age"),
  h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2s.forEach((el) => {
    el.textContent = DOMSelectors.firstName.value;
  });
  console.log(DOMSelectors.lastName.value);
  DOMSelectors.h3s.forEach((el) => {
    el.textContent = DOMSelectors.lastName.value
  });
});
