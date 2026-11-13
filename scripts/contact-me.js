emailjs.init({
  publicKey: "NSV01cQ-jjtWDY6AR",
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_eq2wfvk', 'template_h70h4xk', this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        }, (error) => {
            alert('Oops! Something went wrong, please try again.');
        });
});
