


var input;;

input.addEventListener("push", getInput);

function getInput(){
    if(event.code("Enter")){
   let input = document.getElementById("userInput");
   alert("The entered button has been pressed");
   }
}
