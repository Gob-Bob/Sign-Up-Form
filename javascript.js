const checkPwd = () => {
    if (document.getElementById("user_password").value != document.getElementById("confirm_password").value) {
        document.getElementById("error_message").style.color = "red";
        document.getElementById("error_message").innerHTML = "* Passwords do not match";
    } else {
        document.getElementById("error_message").style.color = "white";
        document.getElementById("error_message").innerHTML = "* Passwords do not match";
    }
}