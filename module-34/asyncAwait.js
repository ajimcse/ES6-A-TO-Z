const myLoader =() =>{
    return new Promise((resolve, reject) =>{
        const success = true
        if(success){
            console.log('data')
        }
        else{
            console.log('not data')
        }
    })
}
myLoader()

// async function loadUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();

//     console.log(data);
// }

// loadUsers();