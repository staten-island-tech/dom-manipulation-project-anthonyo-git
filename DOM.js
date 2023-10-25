const DOMSelectors = {
  form: document.querySelector("form"),
  firstName: document.querySelector(".first-name"),
  lastName: document.querySelector(".last-name"),
  Image: document.querySelector(".image"),
  h2s: document.querySelectorAll("h2"),
  imgs: document.querySelectorALL("img")
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  console.log(DOMSelectors.Image.value);
  DOMSelectors.h2s.forEach((el) => {
    el.textContent = DOMSelectors.firstName.value;
  });
  DOMSelectors.imgs.forEach((el) => {
    el.image = DOMSelectors.Image.value;
  })
});
