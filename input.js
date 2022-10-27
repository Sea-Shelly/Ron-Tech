


var phrase;
var x;



document.getElementById("userInput").addEventListener('keydown', (event) =>{

let  x = event.key;
getInput(event);

});



function getInput(event){
    if(x == "Enter"){
   let phrase = document.getElementById("userInput");
   alert("The entered button has been pressed");
   }
}
