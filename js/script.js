var userName;

var inputs = document.getElementsByTagName("input");

document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
    //e.preventDefault();
    userName = document.forms[0]["userName"].value;

    if (!form.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
    }
    else{
        setCookie("userName", inputs[0].value);

        location.assign("http://127.0.0.1:5500/home.html");
    }

})
/////////////////////////////////////////////////////////////
console.log(document.cookie);
