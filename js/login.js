function formValidate() {
    //alert("Password should be more than 4 characters");
    password = document.forms["loginform"]["password"].value;
    var isValid = true;
    
    if (password.length < 5) {
        //document.write("Password should be more than 4 characters");
        
        alert("Password should be atleast 5 characters");
        isValid = false;

    }
    if (isValid) {
        // Submit the form if validation passes
        document.writeln("Logged in..");
        form.submit();
    }
}