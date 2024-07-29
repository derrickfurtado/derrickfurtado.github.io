console.log("index.js connected")

function validateForm() {
    var name = document.getElementById('field').value;
    var email = document.getElementById('email').value;
    var company = document.getElementById('field').value;
    var message = document.getElementById('field').value;

    if (!name || !email || !company || !message) {
        alert("All fields are required.");
        return false;
    }
    return true;
}