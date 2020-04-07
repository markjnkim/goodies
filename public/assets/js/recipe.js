const $toppingForm = document.querySelector('#topping-form');
const $toppingCb = document.querySelector('#topping');

const $displayArea = document.querySelector('#display-area');
const $recipeForm = document.querySelector('#recipe-form');

//add checkbox dynamically
const handleAddToppingFormSubmit = event => {
  event.preventDefault();

  const inputVal = document.getElementById("add-topping").value;
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = inputVal;
  checkbox.value = inputVal;
  checkbox.id = inputVal;

  const label = document.createElement('label');
  label.htmlFor = "id";

  label.appendChild(document.createTextNode(inputVal));
  $toppingCb.appendChild(checkbox);
  $toppingCb.appendChild(label);
}

const handleRecipeFormSubmit = event => {
  event.preventDefault();

  const formData = new FormData($recipeForm);

  fetch('/recipe', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(postResponse => {
      console.log(postResponse);
      alert("Thank you for adding a recipe.")
    });
};

const printResults = resultArr => {
  console.log(resultArr);
  
  const recipeHTML = resultArr.map((toppings, id) => {
    return `
    <div class="col-12 col-md-5 mb-3">
    <div class="card p-3" data-id=${id}>
    <h4 class="text-primary">${toppings}</h4>
    </div>
    </div>
    `;
  });
  
  $displayArea.innerHTML = recipeHTML.join('');
};

$recipeForm.addEventListener('submit', handleRecipeFormSubmit);
$toppingForm.addEventListener('submit', handleAddToppingFormSubmit);