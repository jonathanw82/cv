

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        document.getElementById('overlayBox').innerHTML = `<div id="overlay"> <div class="spinner" id="spinner">
        <iframe src="https://giphy.com/embed/d9QiBcfzg64Io" frameBorder="0" class="pacmanSpinner"></iframe></div>`;
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('outlook', 'jon_contact', this)
        .then(function(response) {
            // if the response is good 
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('overlayBox').innerHTML = "";
        document.getElementById('messageSent').innerHTML = `<span>Thank you we have recieved your Email and will be in touch soon</span>`;
        document.getElementById('formHomeButRow').className = "formHomeButRowShow";
        document.getElementById('contact-form').reset();
        }, function(error) {
         console.log('FAILED...', error);
         document.getElementById('messageSent').innerHTML = `<span>"Something went wrong please refresh the page and try again"</span>`;
         });
    });
}

