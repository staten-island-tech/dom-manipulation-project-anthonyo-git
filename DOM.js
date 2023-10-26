const DOMSelectors = {
  form: document.querySelector("form"),
  Header: document.querySelector(".head"),
  Text: document.querySelector(".texts"),
  Image: document.querySelector(".image"),
  h2s: document.querySelectorAll("h2"),
  imgs: document.querySelectorAll("img")
};

function object()
  let card = {
    Header: DOMSelectors.Header.value,
    Text: DOMSelectors.Text.value,
    image: DOMSelectors.Image.value
  };

function create()
  let h2 = document.createElement("h2");
  let img = document.createElement("img");

function cardText()
  h2.textContent === DOMSelectors.Text.value
  img.imageContent === DOMSelectors.Image.value



/*
  console.log(DOMSelectors.firstName.value);
  console.log(DOMSelectors.Image.value);
  DOMSelectors.h2s.forEach((el) => {
    el.textContent = DOMSelectors.firstName.value;
  });
});
 */


DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.Text.value)
  object()
  create()
  cardText()
})
