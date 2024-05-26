document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var email = document.getElementById('email').value;

    if (!validateEmail(email)) {
        // Display an error message
        document.getElementById('invalidEmail').innerText = 'Invalid email';
        document.getElementById('validEmail').innerText = '';
    } else {
        // Hide the error message
        document.getElementById('invalidEmail').innerText = '';
        document.getElementById('validEmail').innerText = 'Valid email';
    }
});

function validateEmail(email) {
    // Add your own email validation logic here
    // For example, you can use a regular expression to check if the email is in a valid format
    var regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}