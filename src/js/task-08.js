const form = document.querySelector(".login-form");
// const inputEmail = document.querySelector('input[type="email"]');
// const inputPassword = document.querySelector('input[type="password"]');
// const btnSubmit = document.querySelector('button[type="submit"]');


form.addEventListener("submit", (event) => {
    event.preventDefault();
    // // const evtTar = event.currentTarget;
    // // console.dir(evtTar);
    const newUser = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    }
    // const {
    //     elements: { email, password }
    // } = event.currentTarget;
    // якщо писати так об'єкт - то як до нього звернутись для виводу в консоль? не розумію 
    if (newUser.email === "" || newUser.password === "") {
     alert("All fields must be filled!")
    } 

    console.log(newUser)
})

