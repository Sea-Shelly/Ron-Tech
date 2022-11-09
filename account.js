let first = "";
let last = "";

document.getElementById("newAccount").onkeydown = function (ev) {
    if (ev.key === "Enter") {
        last = document.getElementById("newAccount").value
        document.getElementById("names").innerHTML = "Please enter your first name"
        document.getElementById("newAccount").value = ""

        document.getElementById("newAccount").onkeydown = function (ev) {
            if (ev.key === "Enter") {
                first = document.getElementById("newAccount").value
                document.getElementById("newAccount").value = ""
                alert("Your ID number is: 8607039 \n Your password is: " + last + "8607 \n To go back to the homepage to login, type back");
                 document.getElementById("newAccount").onkeydown = function (ev) {
                            if (ev.key === "Enter") {
                                if (document.getElementById("newAccount").value.toLowerCase() === "back") {
                                    window.location.href = "index.html";
            }
                            }
                 }
            }
        }
    }
}