function isNotEmpty(value) {
    return value.trim() !== '';
}

function isValidNumber(value) {
    return !isNaN(value) && Number(value) > 0;
}

function validateDescription() {
    const description = document.getElementById('description').value;
    const errorElement = document.getElementById('description-error');
    if (!isNotEmpty(description)) {
        errorElement.textContent = 'Description cannot be empty.';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validateAmount() {
    const amount = document.getElementById('amount').value;
    const errorElement = document.getElementById('amount-error');
    if (!isNotEmpty(amount) || !isValidNumber(amount)) {
        errorElement.textContent = 'Please enter a valid amount greater than zero.';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validatePayer() {
    const payer = document.getElementById('payer').value;
    const errorElement = document.getElementById('payer-error');
    if (!isNotEmpty(payer)) {
        errorElement.textContent = 'Please select a payer.';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validateForm() {
    const isDescriptionValid = validateDescription();
    const isAmountValid = validateAmount();
    const isPayerValid = validatePayer();
    return isDescriptionValid && isAmountValid && isPayerValid;
}

document.getElementById('description').addEventListener('input', validateDescription);
document.getElementById('amount').addEventListener('input', validateAmount);
document.getElementById('payer').addEventListener('change', validatePayer);

document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
    }
});


document.querySelectorAll('#description, #amount, #payer').forEach(function(element) {
    element.addEventListener('input', function() {
        document.getElementById('submit-button').disabled = !validateForm();
    });
});