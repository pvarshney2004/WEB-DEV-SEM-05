//----------------DOM -> Document Object Model----------------
// To perform CRUD operations on  HTML or to manipulate HTML
// To make website responsive
// To give response to an action perfrom by user

console.log(document);
//selectors - to get element/s on the JS file.

const h1 = document.getElementById("head");
console.log(h1)

const pWithClass = document.getElementsByClassName("cl1");
console.log(pWithClass)

const allP = document.getElementsByTagName("p")
console.log(allP)

const ByQuery = document.querySelector("#head") // id,class,tag
console.log(ByQuery)

const allQuery = document.querySelectorAll("p")
console.log(allQuery)
