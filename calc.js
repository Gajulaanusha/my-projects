let string = "";
const buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", function (a) {
        const input = a.target.innerHTML;
        if (input === "=") {
               string = eval(string);
                document.querySelector("#tb").value = string;
            } 
        else if (input === "AC") {
            string = "";
            document.querySelector("#tb").value = string;
        } else {
            string += input;
            document.querySelector("#tb").value = string;
        }
    });
});