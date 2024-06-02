const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const commentsContainer = document.getElementById("commentsContainer");

// Load comments from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadComments);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

function checkInputUsername() {
    const usernameValue = username.value;
    if (usernameValue === "") {
        errorInput(username, "Preencha um nome");
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEmail() {
    const emailValue = email.value;
    if (emailValue === "") {
        errorInput(email, "O email é obrigatório");
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputComment() {
    const commentValue = comment.value;
    if (commentValue === "") {
        errorInput(comment, "Digite um comentário");
    } else {
        const formItem = comment.parentElement;
        formItem.className = "form-content";
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputComment();

    const formItems = form.querySelectorAll(".form-content");
    const isValid = [...formItems].every((item) => {
        return item.className === "form-content";
    });

    if (isValid) {
        addComment(username.value, comment.value);
        form.reset(); // Limpar o formulário após o envio
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span");
    textMessage.innerText = message;
    formItem.className = "form-content error";
}

function addComment(username, comment) {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const newComment = { username, comment };
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    renderComments();
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach((comment) => {
        displayComment(comment.username, comment.comment);
    });
}

function renderComments() {
    commentsContainer.innerHTML = "<h2>Comentários</h2>";
    loadComments();
}

function displayComment(username, comment) {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerHTML = `
        <h3>${username}</h3>
        <p>${comment}</p>
    `;
    commentsContainer.appendChild(commentElement);
}
