// auth.js

document.addEventListener('DOMContentLoaded', () => {
  // Verifique se o usuário está logado
  const usuarioLogado = localStorage.getItem('userLogado');

  // Selecionar os elementos corretamente
  const btnEntrar = document.querySelector('.buttons .Entrar');
  const btnCadastro = document.querySelector('.buttons .Cadastro');
  const btnSair = document.querySelector('.buttons .Sair');
  const perfilLink = document.querySelector('.nav-itens li:nth-child(4)'); // Selecionando o quarto item da lista

  // Exibir ou ocultar botões com base no estado de login
  if (usuarioLogado) {
    if (btnEntrar) btnEntrar.style.display = 'none';
    if (btnCadastro) btnCadastro.style.display = 'none';
    if (btnSair) btnSair.style.display = 'block';
    if (perfilLink) perfilLink.style.display = 'block'; // Exibir o link do perfil
  } else {
    if (btnSair) btnSair.style.display = 'none';
    if (perfilLink) perfilLink.style.display = 'none'; // Ocultar o link do perfil
  }

  // Adicionar evento de clique ao botão Sair
  if (btnSair) {
    btnSair.addEventListener('click', () => {
      // Limpar dados de login do localStorage
      localStorage.removeItem('userLogado');
      // Redirecionar para a página inicial ou realizar outras ações necessárias
      window.location.href = '../../pagina inicial/index.html';
    });
  }
});
