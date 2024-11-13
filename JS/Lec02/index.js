let str = "this is a string";
// console.log(str);
// console.log(str.trim())

// console.log(str.includes("is"))

// console.log(str.indexOf("str"))

// let newstr = str.replace("this","it") //replace first occurance of string
// console.log(newstr)

// newstr = str.replaceAll("this","is") //replace all occurance of string
// console.log(newstr)

// newstr = str.slice(1,8);
// console.log(newstr)

// newstr = str.substr(2,3);
// console.log(newstr)

// newstr = str.toLowerCase();
// console.log(newstr)

// newstr = str.toUpperCase();
// console.log(newstr)

// let strArr = str.split("i");
// console.log(strArr)

// ---------------------------Array------------------------------

// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.length)
// arr.shift();
// console.log(arr)
// arr.unshift(10);
// console.log(arr)

// arr.splice(5,2)
// console.log(arr)

// arr.splice(4,2,11,12,13,14)
// console.log(arr)

// let b = [1,2,3,4,5,6,7,8,9];
// let arrStr = b.join("-")
// console.log(arrStr)

//-------------------LOOPS---------------------
//for, while, for-of, for-in, for-each

//for-of
// let a = [1,2,3,4,5,6]
// for(let ele of a){
//     console.log(ele)
// }

// //for-in -> for objects
// for(let ele in a){
//     console.log(ele +" "+a[ele])
// }


//-----------------OBJECT-----------------
let obj = {
    name:"Anurag",
    roll:4,
    section:"AF",
    location:"GLA",
    age:21,
    // sakal:"gadhe jaisi"
}

// console.log(obj.name)
// console.log(obj["roll"])
// console.log("Anurag ki age hai: ",obj.age)

// for(let key in obj){
//     console.log(`${key} -> ${obj[key]}`)
// }



//----------------------JSON---------------------- Javascript Object Notation
let complexObj = {
    name : {
        firstName : "John",
        lastName : "The Don"
    },
    age : 3300,
    work : "Local Thief",
    location : {
        home : "Furfuri Nagar",
        work : "Jungle me"
    },
    hobbies : ["daketi","lootna","chori chakari"]
}
// console.log(complexObj.name.lastName)
// console.log(complexObj["name"]["lastName"])
// console.log(complexObj.location.work)
// console.log(complexObj.hobbies[1])


//--------------FUNCTIONS------------------
// function first(){
//     let a=10;
// }
// let ans=first();
// console.log(ans)


//higher order functions

// function higher2(){
//     console.log("higher order executing....");
//     // return function(){
//     //     console.log("helllo");
//     // }
//     return ()=>{
//         console.log("hello");
//         return 15;
//     }
// }

// let result = higher2();
// console.log(result());


//-------------------MAP--------------------
//return new array
let arr = [1,2,3,4,5,6,7,8,9,10,6,8,4];
function square(x){
    return x*x;
}

// let sqArr = arr.map(square);
// console.log(sqArr)


//--------Filter---------
// const odd = arr.filter((ele)=>{
//     return ele%2;
// })
// console.log(odd)

// const even = arr.filter((ele)=>{
//     return !(ele%2);
// })
// console.log(even)


//---------reduce--------
// let sum = arr.reduce((accum,ele)=>{
//     return accum+ele;
// },0);
// console.log(sum)

// let pp = arr.find((ele)=>{
//     return ele%5==0;
// })
// console.log(pp)





//------------sort---------------

// let incSorted = arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(incSorted)



let products = [
    {name:'product1', price:10, quantity:5},
    {name:'product2', price:20, quantity:6},
    {name:'product3', price:30, quantity:7},
    {name:'product4', price:40, quantity:8},
]

// const ans = products.filter((product)=>{
//     return product.price>10;
// })
// console.log(ans)


// let reducedAns = products.reduce((accum,product)=>{
//     return accum+(product.price*product.quantity);
// },0)
// console.log(reducedAns)
