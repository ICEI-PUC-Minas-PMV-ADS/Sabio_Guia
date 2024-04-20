document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let newPassword = document.getElementById('newPassword').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let msgError = document.getElementById('msgError');

  if (newPassword !== confirmPassword) {
      msgError.textContent = 'As senhas não coincidem';
      return;
  }

  // Aqui você pode adicionar a lógica para enviar a nova senha ao servidor
  // Por exemplo, usando uma solicitação AJAX para um endpoint de API

  // Simulação do envio de nova senha (substitua isso pela lógica real do servidor)
  alert('Sua senha foi redefinida com sucesso!');

  // Redirecionar o usuário de volta à página de login
  window.location.href = "../html/signin.html";
});

  