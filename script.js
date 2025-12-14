function registerUser() {

    // FULL NAME
    let fullName = prompt("Enter your full name:");
    if (!fullName || fullName.trim().split(" ").length < 2) {
        alert("Full Name must contain at least two words.");
        return;
    }

    // EMAIL
    let email = prompt("Enter your email address:");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // PASSWORD
    let password = prompt("Enter your password:");
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert(
            "Password must be at least 8 characters long and include:\n" +
            "- One uppercase letter\n" +
            "- One number\n" +
            "- One special character"
        );
        return;
    }

    // CONFIRM PASSWORD
    let confirmPassword = prompt("Confirm your password:");
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // AGE
    let age = prompt("Enter your age:");
    if (isNaN(age) || Number(age) < 18) {
        alert("You must be 18 years or older.");
        return;
    }

    // SUCCESS
    alert("✅ Registration successful!");
}
