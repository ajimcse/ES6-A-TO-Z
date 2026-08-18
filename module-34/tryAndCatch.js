//  try {
//     console.log('ami thik aci');
//     const result = abc
//     console.log(result)
//  } catch{
//     console.log('error')
//  }


// async function loadUsers() {

//     try {
//         const response = await fetch(
//             "htts://jsonplaceholder.typicode.com/users"
//         );

//         const data = await response.json();

//         console.log(data);

//     } catch (error) {
//         console.log("Data আনতে সমস্যা হয়েছে");
//     }
// }

// loadUsers();
try {
    const age = 15;

    if (age < 18) {
        throw new Error("Age কম");
    }

    console.log("Allowed");

} catch (error) {
    console.log(error.message);

} finally {
    console.log("Process শেষ");
}