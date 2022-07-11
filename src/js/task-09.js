function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());

const body = document.querySelector("body");
const btnChange = document.querySelector(".change-color");
const color = document.querySelector(".color");

btnChange.addEventListener("click", colorChange);

function colorChange() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
  console.log(newColor);
}
