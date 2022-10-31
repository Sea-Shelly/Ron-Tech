document.getElementById("userInput").addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        let input = document.getElementById("userInput").value
        alert(input)
    }
})