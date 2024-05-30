
const form= document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const comment = document.getElementById("comment");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    checkForm();

})

function ckeckInputUsername(){
    const usernameValue = username.value;

    if(usernameValue ===""){
        errorInput(username, "Preencha um nome")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }

}

function ckeckInputEmail(){
    const emailValue = email.value;

    if (emailValue ===""){
        errorInput(email, "O email é obrigatório")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }

}

function ckeckInputComment(){
    const commentValue = comment.value;

    if (commentValue ===""){
        errorInput(comment, "Digite um comentário")
    }else{
        const formItem = comment.parentElement;
        formItem.className = "form-content"
    }

}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputComment();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every ( (item) => {
        return item.className === "form-content"
    });

    if(isValid){
        alert("ENVIADO COM SUCESSO")
    }

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}