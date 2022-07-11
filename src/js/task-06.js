const validationInput = document.querySelector("#validation-input")
// console.dir(validationInput);

validationInput.addEventListener("blur", (event) => {
    // console.log("Add text");
    // console.dir(event);
    if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.remove("invalid")
        validationInput.classList.add("valid")
    } else {
        validationInput.classList.remove("valid")
        validationInput.classList.add("invalid")}
})

