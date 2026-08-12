function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))

}
function displayPosts(postsData) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of postsData) {
       const div = document.createElement('div')
div.classList.add('post')

div.innerHTML = `
    <h4>Post ID: ${post.id}</h4>
    <h5>Post Title: ${post.title}</h5>
    <p>Post Description: ${post.body}</p>
`
        postsContainer.appendChild(div)
        console.log(post)
    }
}
loadPosts()