function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-btn').classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
}

function showSignUp() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-btn').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === "user@example.com" && password === "password") {
        document.getElementById('login-message').textContent = "Login successful!";
        document.getElementById('login-message').style.color = 'green';
    } else {
        document.getElementById('login-message').textContent = "Invalid email or password.";
    }
}

function signUp(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (password !== confirmPassword) {
        document.getElementById('signup-message').textContent = "Passwords do not match.";
    }
    else if (!username) {
        document.getElementById('signup-message').textContent = "Please enter a username.";
    }
    else if (!regex.test(email)) {
        document.getElementById('signup-message').textContent = "Please enter a valid email.";
    }
    else {
        document.getElementById('signup-message').textContent = "Sign-up successful!";
        document.getElementById('signup-message').style.color = 'green';
    }
}
