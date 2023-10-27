const DOMSelectors = {
  form: document.querySelector("form"),
  Header: document.querySelector(".head"),
  Text: document.querySelector(".texts"),
  Image: document.querySelector(".image"),
  h2s: document.querySelectorAll("h2"),
  imgs: document.querySelectorAll("img")
};

function object()
  const card = {
    Header: DOMSelectors.Header.value,
    Text: DOMSelectors.Text.value,
    image: DOMSelectors.Image.value
  };

function create()
  h2 = document.createElement("h2");
  img = document.createElement("img");
  h2.textContent = card.Text;
  img.imageContent = card.image;

document.querySelector(".flexbox-container").insertAdjacentElement(
  "afterbegin"

)

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
  object()
  create()
})
