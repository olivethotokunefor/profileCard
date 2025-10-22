const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

function showError(fieldId, message) {
    const errorElement = document.getElementById(`error-${fieldId}`);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.textContent = '');
}

function validateForm() {
    let isValid = true;
    clearErrors();

    const name = document.getElementById('name').value.trim();
    if (!name) {
        showError('name', 'Name is required');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    }

    const subject = document.getElementById('subject').value.trim();
    if (!subject) {
        showError('subject', 'Subject is required');
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (!message) {
        showError('message', 'Message is required');
        isValid = false;
    }

    return isValid;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    try {
        const formData = new FormData(form);
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            form.reset();
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
    }
});
