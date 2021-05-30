function validate() {
  // event.preventDefault();
  let pwd = window.document.getElementById("password").value;
  console.log(pwd);
  if (pwd.length === 0) {
    console.log("this should be executed");
    window.document.getElementById("invalid").innerHTML = "!Enter the Password";
    window.document.getElementById("valid").style.display = "none";
    return;
  }
  if (pwd.length < 8 || pwd.length > 50) {
    window.document.getElementById("invalid").innerHTML =
      "please enter a password that is grater than 8 and lesser than 50 characters,with one upper case and one digit";
    window.document.getElementById("valid").style.display = "none";
  } else {
    console.log(pwd.split(""));
    window.document.getElementById("valid").innerHTML =
      " Congratulations! Password is valid";
  }
  document.getElementById("password").value = "";
}
