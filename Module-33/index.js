function loadUser2() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => loadUserData2(data))
}
function loadUserData2(users) {
    const ul =document.getElementById('user-list')
     for(const user of users){
       console.log(user.username);
        const li = document.createElement('li');
        li.innerText= `
        User Name:${user.name}
        User gmail: ${user.email}`;
        ul.appendChild(li)
     }
}