document.getElementById('contactForm').new+function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log(`name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Form submitted successfully!');
};
