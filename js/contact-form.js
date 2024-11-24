class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.setupFormHandler();
    }

    setupFormHandler() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Create email body with formatting
            const emailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
            `.trim();

            // Create mailto link
            const mailtoLink = `mailto:daniele.mingolla.jobs@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(emailBody)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Reset form
            this.form.reset();

            // Show success message
            this.showSuccess();
        });
    }

    showSuccess() {
        // Create success alert
        const alert = document.createElement('div');
        alert.className = 'alert alert-success mt-3 alert-dismissible fade show';
        alert.innerHTML = `
            <strong>Success!</strong> Your email client has been opened.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        // Insert alert before the form
        this.form.parentNode.insertBefore(alert, this.form);

        // Remove alert after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
}); 