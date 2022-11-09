let ID = "";
let pass = "";

document.getElementById("userInput").onkeydown = function (ev) {
    {
        if (ev.key === "Enter") {
            if (document.getElementById("userInput").value.toLowerCase() === "new") {
                window.location.href = "makiingAccount.html";
            }
             else if(document.getElementById("userInput").value.toLowerCase() === "login"){


            document.getElementById("onePart").innerHTML = "";
            document.getElementById("theOtherPart").innerHTML = "";
            document.getElementById("indexP").innerHTML = "Please enter your employee ID number: ";
            document.getElementById("userInput").value = ""

                if(ev.key === "Enter"){
            document.getElementById("userInput").onkeydown = function (ev) {
            if(ev.key === "Enter"){
             ID = document.getElementById("userInput").value;
             document.getElementById("indexP").innerHTML = "Please enter your password: ";
             document.getElementById("userInput").value = "";

             document.getElementById("userInput").onkeydown = function (ev) {
                         if(ev.key === "Enter"){
                         pass = document.getElementById("userInput").value;
                         document.getElementById("userInput").value = "";
                             if(ID === "8607039" && pass === "rome8607"){
                             window.location.href = "projectPg.html";
                             }
                         }
                          }
             }

            }
             }
             }


        }
    }
}