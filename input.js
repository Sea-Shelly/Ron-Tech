


var input;

new InputEvent("userInput");

document.getElementById("userInput").addEventListener("Keyboard", userInput);

function getInput(){
    if(event.code("Enter")){
   let input = document.getElementById("userInput");
   alert("The entered button has been pressed");
   }
}
