if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./html/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}, a tela de Perfil apresenta uma visão dos cursos avaliados, o registro das avaliações e comentários deixados por você, a opção de editar perfil e à opção de "Sair"`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../html/signin.html";
}