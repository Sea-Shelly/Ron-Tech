document.getElementById("userInput").addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        let input = document.getElementById("userInput").value

        if(input == "new"){
         window.location.href = "makiingAccount.html";
        } else if(input == "login"){
            document.getElementById("indexP").innerHtml = "Enter your ID:";
            document.getElementById("onePart").innerHtml = "";
            document.getElementById("theOtherPart").innerHtml = "";
        } else{

        }
    }
})
