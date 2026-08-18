function loadDataUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(arr))
}

async function loadDataUserAsync() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)
}

const loadArrowData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)
}

const loadDataTryAndCatch = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await res.json();
       console.log(data)
    }
    catch(error) {
        console.log('data not foned')
    }

}
 

