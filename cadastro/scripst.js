const form = document.querySelector("#form")
const nameInput = document.querySelector("#nome")
const emailInput= document.querySelector("#email")
const passwordInput= document.querySelector("#password")
const datanascInput= document.querySelector("#datanasc")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome esta vazio
    
    if(nameInput.value === "") {
        alert("Por favor, preencha seu nome.")
        return;
    }

    //verifica se o email esta vazio

    if(emailInput.value === "" || IsEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu Email.")
        return;
    }


    //verificar se a senha esta preenchida
    if(validatePassword(passwordInput.value, 8)) {
        return alert("A senha precisa ser no mínimo 8 dígitos")
    }

    // Se todos os campos estiverem preenchidos, envie o formulario

    form.submit();
});

//função que valida email

function IsEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true;
    }

    return false
}

//função que valida senha

function validatePassword(password, mindigit) {
    if(password.length >= mindigit) {
        //senha válida
        return true
    }

    //senha invalida
    return false
}