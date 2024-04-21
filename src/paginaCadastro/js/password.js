let btnAlterarSenha = document.querySelector('#btnAlterarSenha');
let novaSenha = document.querySelector('#novaSenha');
let confirmarNovaSenha = document.querySelector('#confirmarNovaSenha');
let msgErrorAlterarSenha = document.querySelector('#msgErrorAlterarSenha');
let msgSuccessAlterarSenha = document.querySelector('#msgSuccessAlterarSenha');

novaSenha.addEventListener('keyup', () => {
  if (novaSenha.value.length <= 5) {
    novaSenha.style.borderColor = 'red';
    msgErrorAlterarSenha.innerHTML = 'Nova Senha: Insira no mínimo 6 caracteres';
    msgErrorAlterarSenha.style.color = 'red';
  } else {
    novaSenha.style.borderColor = 'green';
    msgErrorAlterarSenha.innerHTML = '';
  }
});

confirmarNovaSenha.addEventListener('keyup', () => {
  if (novaSenha.value !== confirmarNovaSenha.value) {
    confirmarNovaSenha.style.borderColor = 'red';
    msgErrorAlterarSenha.innerHTML = 'As senhas não conferem';
    msgErrorAlterarSenha.style.color = 'red';
  } else {
    confirmarNovaSenha.style.borderColor = 'green';
    msgErrorAlterarSenha.innerHTML = '';
  }
});

btnAlterarSenha.addEventListener('click', () => {
  let novaSenhaValue = novaSenha.value.trim();
  let confirmarNovaSenhaValue = confirmarNovaSenha.value.trim();
  let emailValue = document.querySelector('#email').value.trim(); // Adicionado para obter o valor do e-mail

  if (novaSenhaValue.length < 6 || novaSenhaValue !== confirmarNovaSenhaValue) {
    msgErrorAlterarSenha.innerHTML = 'Por favor, corrija os erros acima';
    msgErrorAlterarSenha.style.color = 'red';
    return;
  }

  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  let usuarioIndex = listaUser.findIndex(user => user.emailCad === emailValue);

  if (usuarioIndex === -1) {
    msgErrorAlterarSenha.innerHTML = 'E-mail não encontrado'; // Ajustado para 'E-mail não encontrado'
    msgErrorAlterarSenha.style.color = 'red';
    return;
  }

  listaUser[usuarioIndex].senhaCad = novaSenhaValue;
  localStorage.setItem('listaUser', JSON.stringify(listaUser));

  novaSenha.value = '';
  confirmarNovaSenha.value = '';

  msgSuccessAlterarSenha.innerHTML = 'Senha alterada com sucesso';
  msgSuccessAlterarSenha.style.color = 'green';
  setTimeout(()=>{
    window.location.href = '../html/signin.html'
}, 3000);
});