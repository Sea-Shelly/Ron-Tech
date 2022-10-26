


var input;

new InputEvent("userInput");

input.addEventListener("Keyboard",userInput);

function getInput(){
    if(event.code("Enter")){
   let input = document.getElementById("userInput");
   alert("The entered button has been pressed");
   }
}
