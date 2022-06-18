// grabbing the static numbers to be able to manipulate it in js
let num1 = 12;
let num2 = 5;
document.getElementById("box1").innerText = num1
document.getElementById("box2").innerText = num2

// using the click value from the html to define the action to be performed when +1 is clicked
function add1(){
    let currentValue = document.getElementById("box1").innerText  
    document.getElementById("box1").innerText = parseInt(currentValue) + 1 
}
// using the click value from the html to define the action to be performed when +2 is clicked
function add2() {
    let currentValue = document.getElementById("box1").innerText
    document.getElementById("box1").innerText = parseInt(currentValue) + 2 
}
// using the click value from the html to define the action to be performed when +3 is clicked
 function add3() {
     let currentValue = document.getElementById("box1").innerText
    document.getElementById("box1").innerText = parseInt(currentValue) + 3 
 }
 
//  defining the box at the right side
 function addRight1(){
     let currentValue = document.getElementById("box2").innerText
    document.getElementById("box2").innerText = parseInt(currentValue) + 1 
 } 
  function addRight2() {
     let currentValue = document.getElementById("box2").innerText
    document.getElementById("box2").innerText = parseInt(currentValue) + 2 
 } 
 function addRight3() {
     let currentValue = document.getElementById("box2").innerText
    document.getElementById("box2").innerText = parseInt(currentValue) + 3 
 } 