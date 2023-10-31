function sendSignupEmail() {
    emailjs.init("YOUR_USER_ID"); // Replace with your Email.js user ID

    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;

    const templateParams = {
        username: signupUsername,
        password: signupPassword,
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
            console.log("Email sent:", response);
            alert("Signup email sent successfully!");
        }, function(error) {
            console.error("Email could not be sent:", error);
            alert("Failed to send signup email.");
        });
}

// Rest of your code
