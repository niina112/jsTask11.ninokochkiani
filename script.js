const name1 = document.getElementById('name')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('sign-up')

const name_error = document.getElementById('name-error')
const email_error = document.getElementById('email-error')
const lastName_error = document.getElementById('lastname-error')
const password_error = document.getElementById('password-error')

form.addEventListener('submit', (e) => {

    if (name1.value === '' || name1.value == null) {
        e.preventDefault();
        name_error.innerHTML = "First Name cannot be empty";
    }

    if (lastName.value === '' || lastName.value == null) {
        e.preventDefault();
        lastName_error.innerHTML = "Last Name cannot be empty"
    }
    
    const emailReg = /^(?!.*\.\.)([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (!email.value.match(emailReg)) {
        e.preventDefault();
        email_error.innerHTML = "Looks like this is not an email";
    }

    if (password.value === '' || password.value == null) {
        e.preventDefault();
        password_error.innerHTML = "Password cannot be empty"
    }
});
