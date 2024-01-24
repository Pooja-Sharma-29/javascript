// Callback fn => functions that are passed on as arguments to another function 

// setTimeout(function(){
// console.log('timer')
// },5000)

// function x(y){
// console.log('x');
// y();
// }

// x(function y(){
// console.log('y')
// })

// fetch  => return promises

// console.log("start");

// setTimeout(function cbT(){
//     console.log("cb timer");
// },5000);

// fetch('url').then(function cbF(){
//     console.log("cb netflix");
// })

// console.log('end');

// Promise
// creating a promise

// const posts = [
//     {title : "Post One" , body : "it is post one"},
//     {title : "Post two" , body : "it is post two"}
// ]


// function getPosts(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post,index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;

//     },1000)
// }

// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject("Error : Something went wrong")
//             }
//         }, 2000);
//     })
// }

// createPost({title : "post three" , body : "it is post three"}).then(getPosts);

// async / await

// async function a(){
//     await createPost({title : "post three" , body : "it is post three"})

//     getPosts();
// }
// a();

// async function fetchUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }

// fetchUsers();