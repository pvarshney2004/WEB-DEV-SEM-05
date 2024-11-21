// const button = document.getElementById("myButton");

// // // Add a click event listener to the button
// // button.addEventListener("click", function () {
// //   // Change the background color of the button

// //   if(button.style.backgroundColor == "lightblue"){
// //     button.style.backgroundColor="white";
// //   }
// //   else{
// //     button.style.backgroundColor = "lightblue";
// //   }
// // });

// function changeColortoRed(){
//   button.style.backgroundColor = "red";
// }

let button = document.getElementById("myButton");
function changeColor() {
  if (button.style.backgroundColor == "lightblue") {
    button.style.backgroundColor = "white";
  } else {
    button.style.backgroundColor = "lightblue";
  }
}
