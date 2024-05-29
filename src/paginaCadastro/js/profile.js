// Profile.js

document.addEventListener("DOMContentLoaded", function() {
  var uploadButton = document.getElementById('upload-image');
  var profileImage = document.getElementById('profile-image');
  var firstNameInput = document.getElementById('first-name');
  var lastNameInput = document.getElementById('last-name');
  var saveButton = document.getElementById('save-button');
  var greetingText = document.getElementById('greeting-text');
  var userName = document.getElementById('userName'); // Adicionado para exibir o nome do usuário

  // Limpar os campos ao carregar a página
  firstNameInput.value = "";
  lastNameInput.value = "";

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

  // Carregar as informações salvas do armazenamento local, se houver
  var savedProfileData = localStorage.getItem('profileData');
  if (savedProfileData) {
    savedProfileData = JSON.parse(savedProfileData);
    firstNameInput.value = savedProfileData.firstName;
    lastNameInput.value = savedProfileData.lastName;
    if (savedProfileData.imageSrc) {
      profileImage.src = savedProfileData.imageSrc;
    }
    greetingText.textContent = "Olá " + savedProfileData.firstName + " " + savedProfileData.lastName;
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
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      imageSrc: profileImage.src // Pode ser uma URL de dados se uma imagem foi carregada
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
    
    // Atualizar o texto de saudação
    // greetingText.textContent = "Olá " + profileData.firstName + " " + profileData.lastName;
    
    // Limpar os campos de texto
    firstNameInput.value = "";
    lastNameInput.value = "";
    
    alert('Perfil salvo com sucesso!');
  });
});


/// Função para excluir os dados do usuário e sair
function excluirConta() {
  // Pegando a lista de usuários do localStorage
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

  // Encontrando o índice do usuário logado
  let userLogado = JSON.parse(localStorage.getItem('userLogado'));
  const emailLogado = userLogado.email; // Pegando o email do usuário logado
  const index = listaUser.findIndex(user => user.emailCad === emailLogado);

  // Se o usuário for encontrado, remova-o da lista
  if (index !== -1) {
    listaUser.splice(index, 1);
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    // Limpar dados de login do localStorage
    localStorage.removeItem('userLogado');
    alert('Conta excluída com sucesso!');
    // Redirecionar para a página de login ou outra página apropriada
    window.location.href = '../html/signin.html';
  } else {
    alert('Usuário não encontrado!');
  }
}

// Adicionando evento de clique ao botão de exclusão
const btnExcluirConta = document.querySelector('#deleteAccount');
if (btnExcluirConta) {
  btnExcluirConta.addEventListener('click', excluirConta);
}

