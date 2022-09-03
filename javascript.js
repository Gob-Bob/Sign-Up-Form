const checkPwd = () => {
    if (document.getElementById("user_password").value != document.getElementById("confirm_password").value) {
        document.getElementById("error_message").style.color = "red";
    }
}