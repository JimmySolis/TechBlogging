const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    console.log(`Hello ${username}`);
    const password = document.querySelector('#password-signup').value.trim();

        if(username && password){
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ username, password}),
                headers: { 'Content-Type': 'application/json' }
            });

            if( response.ok ){
                document.location.replace('/');
            } else {
                alert(`Failed to sign up.
                       Try a new Username, perhaps it isn't unique.
                       And make sure there are more than 8 charatcers for each.
                       Stick to numbers and letters only.`)
            }
        }
} 


document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

