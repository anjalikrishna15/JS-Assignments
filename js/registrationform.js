document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("frmRegistration");
    const name = document.getElementById("txtFullName");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");

    //error messages
    const nameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmpasswordError");

    //form addEventListner
    form.addEventListener("submit", function (event) {
        //prevent form submission
        event.preventDefault();
        if (!name.value.trim()) {
            nameError.textContent = "Enter full name";
        } else {
            nameError.textContent = "";
        }
        if (!email.value.trim()) {
            emailError.textContent = "Enter your email address";
        } else {
            emailError.textContent = "";
        }
        if (!phoneNumber.value.trim()) {
            phoneError.textContent = "Enter a phone number";
        }
        else if (phoneNumber.value.trim().length != 10) {
            console.log(phoneNumber.value.trim().length);
            phoneError.textContent = "Phone number must be 10 digits";
        }

        else {
            phoneError.textContent = "";
        }
        if (!password.value.trim()) {
            passwordError.textContent = "Enter password";
        } else {
            passwordError.textContent = "";
        }
        if (!confirmPassword.value.trim()) {
            confirmPasswordError.textContent = "Enter password confirmation";
        }
        else if (password.value.trim() != confirmPassword.value.trim()) {
            passwordError.textContent = "Password do not match";
            confirmPasswordError.textContent = "Password do not match";
        } else {
            confirmPasswordError.textContent = "";
            passwordError.textContent = "";
        }

    })

});