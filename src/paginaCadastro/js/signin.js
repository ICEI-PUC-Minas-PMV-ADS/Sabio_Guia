// profile.js

document.addEventListener('DOMContentLoaded', () => {
  // Verifique se o usuário está logado
  const usuarioLogado = localStorage.getItem('userLogado'); // Supondo que você armazene os dados do usuário logado no localStorage

  if (usuarioLogado) {
    document.getElementById('entrarBtn').style.display = 'none';
    document.getElementById('cadastroBtn').style.display = 'none';
  } else {
    document.getElementById('sairBtn').style.display = 'none';
  }
});

let icon = document.querySelector('.bi-eye-fill');

icon.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');
  
  if (inputSenha.getAttribute('type') === 'password') {
    inputSenha.setAttribute('type', 'text');
    icon.classList.remove('bi-eye-fill');
    icon.classList.add('bi-eye-slash');
  } else {
    inputSenha.setAttribute('type', 'password');
    icon.classList.remove('bi-eye-slash');
    icon.classList.add('bi-eye-fill');
  }
});

function entrar() {
  let email = document.querySelector('#email');
  let userLabel = document.querySelector('#userLabel');
  let senha = document.querySelector('#senha');
  let senhaLabel = document.querySelector('#senhaLabel');
  let msgError = document.querySelector('#msgError');
  let listaUser = [];
  let userValid = {
    nome: null,
    email: null,
    senha: null
  };

  listaUser = JSON.parse(localStorage.getItem('listaUser'));

  listaUser?.forEach((item) => {
    if (email.value == item.emailCad && senha.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        senha: item.senhaCad
      };
    }
  });

  if (email.value == userValid.email && senha.value == userValid.senha) {
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
    
    // Redirecionar para a página de perfil
    window.location.href = '../html/profile.html';

      } else {
    userLabel.setAttribute('style', 'color: red');
    email.setAttribute('style', 'border-color: red');
    senhaLabel.setAttribute('style', 'color: red');
    senha.setAttribute('style', 'border-color: red');
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Usuário ou senha incorretos';
    email.focus();
  }
}
