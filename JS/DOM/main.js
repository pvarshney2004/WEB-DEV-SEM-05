//----------------DOM -> Document Object Model----------------
// To perform CRUD operations on  HTML or to manipulate HTML
// To make website responsive
// To give response to an action perfrom by user

// console.log(document);
//selectors - to get element/s on the JS file.

const h1 = document.getElementById("head");
// console.log(h1)

// const pWithClass = document.getElementsByClassName("cl1");
// console.log(pWithClass)

// const allP = document.getElementsByTagName("p")
// console.log(allP)

// const ByQuery = document.querySelector("#head") // id,class,tag
// console.log(ByQuery)

// const allQuery = document.querySelectorAll("p")
// console.log(allQuery)


//------attributes and methods , accessors
// console.log(h1.innerText);
// // console.log(h1.innerHTML);
// // console.log(h1.textContent);

// console.log(h1.id);
// console.log(h1.className);

// console.log(h1.classList);

// h1.classList.add("cl5");
// // h1.classList.remove();
// // h1.classList.toggle();
// console.log(h1.classList);


// // h1.setAttribute("","");

// h1.innerText = "Hello! How are you?";
// console.log(h1.innerText)

// h1.innerHTML = `<em>By JS</em>`



// create elements
const div = document.createElement("div");
div.innerHTML = '<em>Created by </em>JS'
// div.className = "cl1";
// div.setAttribute("class","cl1");
div.classList.add("cl1");


div.id = "divv";
div.setAttribute("id","container");
console.log(div)

//to send created element to HTML





//eventListeners
const btn = document.getElementById("btn");
console.log(btn)
btn.addEventListener("click",(e)=>{
    console.log(e)
})

