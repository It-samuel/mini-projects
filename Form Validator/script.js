const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('Password');
const confirm_password = document.getElementById('confirm Password');


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid or not
function isValidEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email.value.trim())) {
        showSuccess(email);
    } else {
        showError(email, 'Email is not valid');
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length(last step)
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
 
    
    // Refactored validation
    checkRequired([username, email, password, confirm_password]);

    // Check input length(last step)
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    isValidEmail(email);
    checkPasswordsMatch(password, confirm_password);
    


    
// Normal validation

    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }
    // if (email.value === '') {
    //     showError(email, 'email is required');
    // }else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }
    // if (password.value === '') {
    //     showError(password, 'password is required');
    // } else {
    //     showSuccess(password);
    // }
    // if (confirm_password.value === '') {
    //     showError(confirm_password, 'confirm password is required');
    // } else {
    //     showSuccess(confirm_password);
    // }
    
});