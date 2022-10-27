


var phrase;
var x;



document.getElementById("userInput").addEventListener("keypress", (event) =>{

if(event.keycode == 13){
let phrase = document.getElementById("userInput").value();
alert(phrase);
return;
}

});



function getInput(event){
    if(x == "Enter"){
   let phrase = document.getElementById("userInput");
   alert("The enter button has been pressed");
   }
}
