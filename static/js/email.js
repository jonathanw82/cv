

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        document.getElementById('spinner').innerHTML = `<i class="fa fa-home nav-icon" id="spinner" aria-hidden="true"></i>`;
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('outlook', 'jon_contact', this)
        .then(function(response) {
            // if the response is good 
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('spinner').innerHTML = "";
        document.getElementById('messageSent').innerHTML = `<span>Thank you we have recieved your Email and will be in touch soon</span>`;
        }, function(error) {
         console.log('FAILED...', error);
         document.getElementById('messageSent').innerHTML = `<span>"Something went wrong please refresh the page and try again"</span>`;
         });
    });
}

