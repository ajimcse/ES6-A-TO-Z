function dataLoad2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data =>console.log(data) )
}
function dataLoadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUsers(data) )
} 
function displayUsers(value){
    console.log(value)
}