window.onload = function() {
    displayPosts();
};

function displayPosts() {
    const postsContainer = document.getElementById('posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const authorElement = document.createElement('h6');
        authorElement.textContent = 'Posted by: ' + post.username;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(authorElement);

        postsContainer.appendChild(postElement);
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function goBack() {
    window.history.back();
}
