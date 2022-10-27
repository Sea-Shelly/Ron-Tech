


var phrase;
var x = event.key;



document.getElementById("userInput").addEventListener("input", getInput());


function getInput(event){
    if(x == "Enter"){
   let phrase = document.getElementById("userInput");
   alert("The entered button has been pressed");
   }
}
