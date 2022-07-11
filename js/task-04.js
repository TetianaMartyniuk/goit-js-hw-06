const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"')
const spanValue = document.querySelector("#value") 

// const counter = {
//     counterValue: 0,

//     decrementCount() {
//         this.counterValue -= 1;
//     },
//     incrementCount() {
//         this.counterValue += 1;
//     },
// }

// buttonDecrement.addEventListener("click", () => {
//     counter.decrementCount();
//     spanValue.textContent = counter.counterValue;
// })
// buttonIncrement.addEventListener("click", () => {
//     counter.incrementCount();
//     spanValue.textContent = counter.counterValue;
// })

let counterValue = 0;
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
})
buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
})
