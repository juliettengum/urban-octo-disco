document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete all fields');
        return;
    }

    const postData = {
        username: username,
        title: title,
        content: content
    };

    // Save to localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));
    console.log("post saved");
    // Redirect to posts page
    window.location.href = 'blog.html';
});
