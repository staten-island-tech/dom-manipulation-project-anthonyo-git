const DOMSelectors = {
  form: document.querySelector("#form"),
  Header: document.querySelector(".head"),
  Text: document.querySelector(".texts"),
  Image: document.querySelector(".image"),
  h2s: document.querySelectorAll("h2"),
  imgs: document.querySelectorAll("img")
};

function object() {
  const card = {
    Header: DOMSelectors.Header.value,
    Text: DOMSelectors.Text.value,
    Image: DOMSelectors.Image.value
  } 
  return card;
};
  
function insert(card) {
  document.querySelector(".Flexbox-container").insertAdjacentHTML(
    "beforeend", 
    `<h2>${card.Header}</h2
    <p>${card.Text}</p>
    <img src="${card.Image}">`
  );
}
   
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
  const card = object();
  insert(card);
});;
