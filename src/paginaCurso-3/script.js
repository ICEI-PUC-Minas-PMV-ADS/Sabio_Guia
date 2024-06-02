// Verificar se o usuário está logado ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('userLogado')) {
        // Se o usuário não estiver logado, desabilitar o formulário de comentário
        document.getElementById('commentForm').style.display = 'none';
    }
});

document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let commentText = document.getElementById('commentText').value;
    let rating = document.querySelector('input[name="rating"]:checked').value;
    let userLoggedIn = localStorage.getItem('userLogado');
    let userName;
    let userPhoto;

    if (userLoggedIn) {
        let userData = JSON.parse(localStorage.getItem('profileData'));
        userName = userData.firstName;
        userPhoto = userData.imageSrc;
    } else {
        alert('Você precisa estar logado para comentar.');
        return;
    }

    if (commentText.trim() === '') {
        alert('Por favor, insira um comentário.');
        return;
    }
    // Adiciona o comentário à memória do navegador
    addCommentToStorage(commentText, rating, userName, userPhoto);
    // Atualiza a lista de comentários na página
    displayCommentsFromStorage();
});

function addCommentToStorage(commentText, rating, userName, userPhoto) {
    let comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    let newComment = { text: commentText, rating: rating, user: userName, photo: userPhoto };
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));
}


function displayCommentsFromStorage() {
    let comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    let commentList = document.getElementById('commentsList');
    commentList.innerHTML = ''; // Limpa a lista de comentários antes de atualizar
    comments.forEach(function(comment) {
        let listItem = document.createElement('li');
        listItem.classList.add('comment');
        listItem.innerHTML = `
            <div class="comment-header">
                <img src="${comment.photo}" alt="Foto do usuário" class="user-photo">
                <p class="comment-user">${comment.user}</p>
            </div>
            <p>${comment.text}</p>
            <p>Avaliação: ${comment.rating} estrelas</p>`;
        commentList.appendChild(listItem);
    });
}



// Exibe os comentários armazenados ao carregar a página
displayCommentsFromStorage();