document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Hardcoded credentials (For Testing)
    const validEmail = "Omkar";
    const validPassword = "12345";

    if (email === validEmail && password === validPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect after login
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});
