const DOMSelectors = { // -Create an object called “DOMSelectors” to hold your DOM Selectors
  form: document.querySelector("#form"), 
  Header: document.querySelector(".head"),
  Text: document.querySelector(".texts"),
  Image: document.querySelector(".image"),
  h2s: document.querySelectorAll("h2"),
  imgs: document.querySelectorAll("img")
};
function afterSubmit(event) { // -Create a function that creates an object and calls the following functions
  event.preventDefault();

  const card = {
    Header: DOMSelectors.Header.value,
    Text: DOMSelectors.Text.value,
    Image: DOMSelectors.Image.value
  } 
  insert(card);
}

DOMSelectors.form.addEventListener("submit", afterSubmit);

  
function insert(card) { // -Create a function that injects the newly created object into the DOM
    const newCard = 
    `<div class="cell">
        <div class="text-container">
          <h2>${card.Header}</h2>
          <p>${card.Text}</p>
        </div>
        <img src="${card.Image}">
        <button class="remove-button">Remove</button>
      </div>`;

  document.querySelector(".Flexbox-container").insertAdjacentHTML('beforeend', newCard);

  let removeButtons = document.querySelectorAll(".remove-button");// -Create a function to remove an object after they have been created
  removeButtons.forEach((btn) => {
   btn.addEventListener("click", function () {
     this.parentElement.remove();
   });
  });

  clearFields();
 }
   

 function clearFields() { // -Create a function that clears the input fields after injecting the object
  DOMSelectors.Header.value = "";
  DOMSelectors.Text.value = "";
  DOMSelectors.Image.value = "";
 }

/*

  console.log(DOMSelectors.firstName.value);
  console.log(DOMSelectors.Image.value);
  DOMSelectors.h2s.forEach((el) => {
    el.textContent = DOMSelectors.firstName.value;
  });
});
 */


