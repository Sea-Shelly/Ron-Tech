


var phrase;



document.getElementById("userInput").addEventListener("input", getInput());


function getInput(){
    if(event.code("Enter")){
   let phrase = document.getElementById("userInput");
   alert("The entered button has been pressed");
   }
}
