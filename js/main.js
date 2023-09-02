
function onClickButton() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var regexPassword = /^(?=.*[!@#$&*]).{6,}$/;
    if (username.length < 3) {
      alert("Please enter a valid username. Minimum length: 3.");
      return;
    }
    if (!regexPassword.test(password)) {
      alert("Please enter a valid password. Minimum length: 6 & one special character.");
      return;
    }
    window.location.href = "introduce.html";
}
