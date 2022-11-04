

let x = 0;

document.getElementById("newAccount").addEventListener("keypress", function (event) {
    if (event.code === "Enter") {



        switch(x){
        case 0:
         let last = document.getElementById("newAccount").value
         break;
        case 1:
        document.getElementById("names").innerHTML = "Please enter your first name";
                let first = document.getElementById("newAccount").value;
                alert(first + last);
                break;

        }


    }
    x++;
})