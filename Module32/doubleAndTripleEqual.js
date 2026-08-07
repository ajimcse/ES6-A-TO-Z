const first = 2;
const second = '2';
if(first ===second){
    console.log('value are equal');
} else{
    console.log('value are not equal')
}
if(first ==second){
    console.log('value are equal');
} else{
    console.log('value are not equal')
}
/*
| `==` (Double Equal)         | `===` (Triple Equal)             |
| --------------------------- | -------------------------------- |
| শুধু value compare করে      | Value এবং type দুটোই compare করে |
| Implicit conversion করে     | কোনো conversion করে না           |
| Unexpected result আসতে পারে | বেশি safe এবং predictable        |
| কম ব্যবহার করা ভালো         | **বেশি ব্যবহার করা উচিত**        |





Interview-তে যেভাবে বলবে

Object এবং Array হলো reference type। তাই == বা === দিয়ে compare করলে JavaScript তাদের ভিতরের data compare করে না, বরং memory reference compare করে। Reference একই হলে true, আর আলাদা হলে false।

*/


