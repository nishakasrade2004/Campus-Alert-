document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials for demonstration purposes
    const validUsername = 'user123';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        // Redirect to the main home page on successful login
        window.location.href = 'home.html';
    } else {
        // Display error message for incorrect credentials
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        errorMessage.style.color = 'red';
    }
});