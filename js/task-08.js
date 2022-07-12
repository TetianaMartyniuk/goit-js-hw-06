const form = document.querySelector(".login-form");
// const inputEmail = document.querySelector('input[type="email"]');
// const inputPassword = document.querySelector('input[type="password"]');
// const btnSubmit = document.querySelector('button[type="submit"]');


form.addEventListener("submit", (event) => {
    event.preventDefault();
    // // const evtTar = event.currentTarget;
    // // console.dir(evtTar);
    const newUser = {}
    // const {
    //     elements: { email, password }
    // } = event.currentTarget;
    // якщо писати так об'єкт - то як до нього звернутись для виводу в консоль? не розумію 
    if (event.currentTarget.elements.email.value !== "" && event.currentTarget.elements.password.value !== "") {
        newUser.email = event.currentTarget.elements.email.value;
        newUser.password = event.currentTarget.elements.password.value;
        form.reset();
        return console.log(newUser)
    }
    // form.reset();
    return alert("All fields must be filled!")
})

