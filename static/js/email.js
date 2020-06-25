

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('outlook', 'jon_contact', this)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
         console.log('FAILED...', error);
         });
    });
}