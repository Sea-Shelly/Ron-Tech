
document.getElementById("newAccount").addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        let last = document.getElementById("newAccount").value
        document.getElementById("names").innerHTML = "Please enter your first name";
        let first = document.getElementById("newAccount").value;
        alert(first + last);


    }
})