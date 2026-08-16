// const myLoader =() =>{
//     return new Promise((resolve, reject) =>{
//         const success = true
//         if(success){
//             console.log('data')
//         }
//         else{
//             console.log('not data')
//         }
//     })
// }
// myLoader()

// async function loadUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();

//     console.log(data);
// }

// loadUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


//  async function loadData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     console.log(data)
// }
// loadData()

const  dataLoad = async () =>{
    const data2 =  await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data2.json()
    console.log(users)
}
dataLoad()