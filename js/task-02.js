const ingredientsList = document.querySelector("#ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// for (let ingredient of ingredients) {
//   const item = document.createElement("li");
//   item.classList.add("item")
//   item.textContent = ingredient;
//   console.log(item);
//   ingredientsList.append(item)
// }

const newIngredients = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item")
  item.textContent = ingredient;
  console.log(item);
  newIngredients.push(item);
})

ingredientsList.append(...newIngredients);