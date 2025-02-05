document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const destination = document.getElementById('destination');
    const travelDates = document.getElementById('travel-dates');
    const startDate = document.getElementById('Start_Date');
    const endDate = document.getElementById('EDate');
    const submitButton = form.querySelector('button');

    function validateForm() {
        let valid = true;

        document.querySelectorAll('.error').forEach(el => el.remove());

        
        if (destination.value.trim() === '') {
            showError(destination, 'Destination cannot be empty.');
            valid = false;
        }

       
        if (travelDates.value === '') {
            showError(travelDates, 'Travel dates cannot be empty.');
            valid = false;
        }

       
        if (startDate.value === '' || endDate.value === '') {
            showError(startDate, 'Start date and end date cannot be empty.');
            valid = false;
        } else if (new Date(startDate.value) >= new Date(endDate.value)) {
            showError(startDate, 'Start date must be earlier than end date.');
            valid = false;
        }

        
        submitButton.disabled = !valid;
    }

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = message;
        input.parentNode.appendChild(error);
    }

    
    destination.addEventListener('input', validateForm);
    travelDates.addEventListener('input', validateForm);
    startDate.addEventListener('input', validateForm);
    endDate.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        let valid = true;

       
        document.querySelectorAll('.error').forEach(el => el.remove());

        
        if (destination.value.trim() === '') {
            showError(destination, 'Destination cannot be empty.');
            valid = false;
        }

       
        if (travelDates.value === '') {
            showError(travelDates, 'Travel dates cannot be empty.');
            valid = false;
        }

        
        if (startDate.value === '' || endDate.value === '') {
            showError(startDate, 'Start date and end date cannot be empty.');
            valid = false;
        } else if (new Date(startDate.value) >= new Date(endDate.value)) {
            showError(startDate, 'Start date must be earlier than end date.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

   
    validateForm();
});
