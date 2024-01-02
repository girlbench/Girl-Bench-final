function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailRequiredError = document.getElementById('email-required-error');
    const emailInvalidError = document.getElementById('email-invalid-error');
    const passwordRequiredError = document.getElementById('password-required-error');
    const passwordMinLengthError = document.getElementById('password-min-length-error');

    emailRequiredError.style.display = 'none';
    emailInvalidError.style.display = 'none';
    passwordRequiredError.style.display = 'none';
    passwordMinLengthError.style.display = 'none';

    if (!email) {
        emailRequiredError.style.display = 'block';
    } else if (!validateEmail(email)) {
        emailInvalidError.style.display = 'block';
    }

    if (!password) {
        passwordRequiredError.style.display = 'block';
    } else if (password.length < 8) {
        passwordMinLengthError.style.display = 'block';
    }
}