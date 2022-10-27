


var input;



document.getElementById("userInput").addEventListener(Input, getInput());
}

function getInput(){
    if(event.code("Enter")){
   let input = document.getElementById("userInput");
   alert("The entered button has been pressed");
   }
}
