document.addEventListener("DOMContentLoaded", function() {
  var uploadButton = document.getElementById('upload-image');
  var profileImage = document.getElementById('profile-image');
  var firstNameInput = document.getElementById('first-name');
  var lastNameInput = document.getElementById('last-name');
  var saveButton = document.getElementById('save-button');
  var greetingText = document.getElementById('greeting-text');
  var userName = document.getElementById('userName'); // Adicionado para exibir o nome do usuário

  // Carregar as informações do usuário logado
  var userLogado = JSON.parse(localStorage.getItem('userLogado'));
  if (userLogado && userLogado.nome) {
    userName.textContent = "Olá, " + userLogado.nome;
    var nomeDividido = userLogado.nome.split(' ');
    firstNameInput.value = nomeDividido[0];
    lastNameInput.value = nomeDividido.slice(1).join(' ');
  } else {
    // Se não encontrar usuário logado, redireciona para a página de login
    window.location.href = '../html/signin.html';
  }

  // Carregar a imagem do usuário, se houver, ao carregar a página
  if (userLogado && userLogado.imageSrc) {
    profileImage.src = userLogado.imageSrc;
  }

  // Carregar a imagem quando o usuário selecionar um arquivo
  uploadButton.addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        profileImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Salvar as informações no armazenamento local ao clicar no botão Salvar
  saveButton.addEventListener('click', function() {
    var profileData = {
      nome: firstNameInput.value + ' ' + lastNameInput.value,
      imageSrc: profileImage.src
    };

    localStorage.setItem('userLogado', JSON.stringify(profileData));

    alert('Perfil salvo com sucesso!');
  });

});

// Função para excluir os dados do usuário e sair
function excluirConta() {
  // Limpar dados de login do localStorage
  localStorage.removeItem('userLogado');
  alert('Conta excluída com sucesso!');
  // Redirecionar para a página de login ou outra página apropriada
  window.location.href = '../html/signin.html';
}

// Adicionando evento de clique ao botão de exclusão
const btnExcluirConta = document.querySelector('#deleteAccount');
if (btnExcluirConta) {
  btnExcluirConta.addEventListener('click', excluirConta);
}
