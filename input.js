document.getElementById("userInput").addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        let input = document.getElementById("userInput").value
        if(input == "new"){
         window.location.href = "makiingAccount.html";
        } else if(input == "login"){

        } else{

        }
    }
})
