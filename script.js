document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username].password === password) {
        // Redirect to landing page
        window.location.href = 'landing.html';
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        alert('User already exists!');
    } else {
        users[username] = { password };
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! You can now log in.');
        document.getElementById('reg-username').value = '';
        document.getElementById('reg-password').value = '';
        toggleToLogin();
    }
});

document.getElementById('toggle-form').addEventListener('click', function() {
    toggleToRegister();
});

document.getElementById('login-link').addEventListener('click', function() {
    toggleToLogin();
});

function toggleToRegister() {
    document.getElementById('auth-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function toggleToLogin() {
    document.getElementById('auth-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}
