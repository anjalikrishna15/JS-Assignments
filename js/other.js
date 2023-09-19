function changeTextBox() {
    if (document.getElementById("items").value === "other") {

        document.getElementById("txtbox").disabled = "";
        document.getElementById("txtbox").style.display = 'inline';
    }

    else {
        document.getElementById("txtbox").disabled = "false";
        document.getElementById("txtbox").style.display = "none";
    }
}

