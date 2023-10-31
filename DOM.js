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
  p = document.createElement("texts")
  img = document.createElement("img");
  h2.textContent = card.Text;
  img.src = card.image;

 // this function will cause new HTML to be added when the input button is clicked.
  
function insert()
  document.querySelector(".Flexbox-container").insertAdjacentHTML(
    "afterend",
    
    `<h2>${h2}</h2>
    <p>${card.Text}<p>
    <img src="${card.image}" </img>`
  );
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
  insert()
})
