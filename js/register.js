function onClickButton() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var password = document.getElementById("password").value;
    var regexPassword = /^(?=.*[!@#$&*]).{6,}$/;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (username.length < 3) {
        alert("Please enter a valid username. Minimum length: 3.");
        return;
    }
    if (!regexEmail.test(email)) {
        alert("Please enter a valid email.");
        return;
    }
    if (!regexPassword.test(password)) {
        alert("Please enter a valid password. Minimum length: 6 & one special character.");
        return;
    }
    if (confirmPassword != password) {
        alert("The confirm password is not the same as password. Please enter again.");
        return;
    }
    alert("Create account successful! Please return to the login page.");
    window.location.href = "index.html";
}