let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

email.addEventListener('keyup', () => {
  const emailRegex = /^[^\s@]{4,}@([^\s@]+\.)+[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    labelEmail.setAttribute('style', 'color: red');
    labelEmail.innerHTML = 'E-mail *Insira um e-mail válido';
    email.setAttribute('style', 'border-color: red');
    validEmail = false;
  } else {
    labelEmail.setAttribute('style', 'color: green');
    labelEmail.innerHTML = 'E-mail';
    email.setAttribute('style', 'border-color: green');
    validEmail = true;
  }
})

senha.addEventListener('keyup', () => {
  const password = senha.value;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[^A-Za-z0-9]/;

  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasNumber = numberRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  if (password.length < 6 || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
    labelSenha.setAttribute('style', 'color: red');
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais';
    senha.setAttribute('style', 'border-color: red');
    validSenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green');
    labelSenha.innerHTML = 'Senha';
    senha.setAttribute('style', 'border-color: green');
    validSenha = true;
  }
});

confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red');
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
    confirmSenha.setAttribute('style', 'border-color: red');
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green');
    labelConfirmSenha.innerHTML = 'Confirmar Senha';
    confirmSenha.setAttribute('style', 'border-color: green');
    validConfirmSenha = true;
  }
});

function cadastrar(){
  if(validNome && validEmail && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push({
      nomeCad: nome.value,
      emailCad: email.value,
      senhaCad: senha.value
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = '../html/signin.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})