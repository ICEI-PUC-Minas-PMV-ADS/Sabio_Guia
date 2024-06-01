document.addEventListener('DOMContentLoaded', () => {
    const btnSair = document.querySelector('.buttons .Sair');

    // Adicionar evento de clique ao botão Sair
    if (btnSair) {
        btnSair.addEventListener('click', (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link
            // Limpar dados de login do localStorage
            localStorage.removeItem('userLogado');
            // Redirecionar para a página inicial
            window.location.href = '../../pagina inicial/index.html';
        });
    }
});