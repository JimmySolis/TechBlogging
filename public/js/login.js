const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type' : 'application/json' }
        });

        if(response.ok) {
            document.location.replace(`/dash`);
        } else {
            alert('Failed to log in. Do you have an account? If not click Sign-up')
        }
    }
}

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

