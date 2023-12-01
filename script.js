const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const submit = document.querySelector("#submit");

submit.addEventListener('click', (event) => {
    const mistake = document.querySelector("#mistake");
    if (password.value !== confirm_password.value) {
        mistake.textContent = "* Passwords do not match";
        event.preventDefault();
        password.classList.add("password-mistake");
        confirm_password.classList.add("password-mistake");
    } 
});


