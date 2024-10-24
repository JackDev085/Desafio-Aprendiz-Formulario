const form = document.querySelector("#form")
const firstNameInput = document.querySelector("#first-name")
const lastNameInput = document.querySelector("#last-name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    //verifica se o primeiro nome tá vazio
    if (firstNameInput.value === "") {
        alert("Por favor, preencha seu primeiro nome")
        return;
    }
    //verifica se o segundo nome tá vazio
    if (lastNameInput.value === "") {
        alert("Por favor, preencha seu segundo nome")
        return;
    }
    //verifica se o email está nos padrões
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Parece que isso não é um e-mail")
        return;
    }
    //verifica a senha
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 digitos")
        return;
    }


    //envia o formulario
    form.submit()
})
//função que valida email
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}
//função que valida senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    } else {
        return false;
    }
}