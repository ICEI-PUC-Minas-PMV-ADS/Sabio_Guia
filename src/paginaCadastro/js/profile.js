document.addEventListener("DOMContentLoaded", function() {
  var uploadButton = document.getElementById('upload-image');
  var profileImage = document.getElementById('profile-image');
  var firstNameInput = document.getElementById('first-name');
  var lastNameInput = document.getElementById('last-name');
  var saveButton = document.getElementById('save-button');
  var greetingText = document.getElementById('greeting-text');

  // Limpar os campos ao carregar a página
  firstNameInput.value = "";
  lastNameInput.value = "";

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
    greetingText.textContent = "Olá " + profileData.firstName + " " + profileData.lastName;
    
    // Limpar os campos de texto
    firstNameInput.value = "";
    lastNameInput.value = "";
    
    alert('Perfil salvo com sucesso!');
  });
});
