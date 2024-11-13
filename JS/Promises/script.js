// console.log("Start");

// const promise = new Promise((resolve,reject)=>{
//     let randomNum = Math.random()*10; //between 0-10
//     if(randomNum<5){
//         resolve(randomNum);
//     }
//     else{
//         reject(randomNum);
//     }
// });

// promise.then((response)=>{
//     console.log("Promise resolve");
// }).catch((error)=>{
//     console.log("Promise rejected");
// });

// console.log(promise);

// console.log("End");




//API Calling

// let fetchPromise = fetch("https://official-joke-api.appspot.com/random_joke");

// fetchPromise.then((response)=>{
//     let data = response.json();
//     data.then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     });
// }).catch((error)=>{
//     console.log(error)
// });


//------------async Functions
//1.
// async function name(){

// }

//2.
// const getJokes = async ()=>{
//     let res = await fetch("https://official-joke-api.appspot.com/random_joke");
//     let data = await res.json();
//     console.log(data);
// }

// getJokes();




