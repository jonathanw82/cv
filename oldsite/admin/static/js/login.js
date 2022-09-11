
/*This function looks at the 2 passwords on the registartion form and compaires
the 2 if they are not the same text will tell you they do not match, if they
do match the submit button will appear and the form can be submitted */

$(function test() {
    $("#password2").keyup(function () {
        let password1 = $("#password1").val(); // Gets the password value
        let password2 = $("#password2").val();
        
        if (password1 != password2) { // looks to see if they dont match
            document.getElementById('submitButton').innerHTML = "";
            document.getElementById('doNotMatch').innerHTML = `<span class="loginWarning">The passwords do not match!</span>`;
        }
        else if(password1 == password2){ // looks to see if they do match
            document.getElementById('doNotMatch').innerHTML = "";
            document.getElementById('doNotMatch').innerHTML = `<span class="loginWarning">Thats a match please press submit!</span>`;
            document.getElementById('submitButton').innerHTML = `<span><Button class="btn btn-secondary loginButton" type="submit">Register</Button></span>`;
        }
    });
});

function clearmessage(){
    document.getElementById('doNotMatch').innerHTML = `<span class="loginWarning">Please confirm your passwords match to register!</span>`;
    document.getElementById('submitButton').innerHTML = `<span><Button class="btn btn-secondary loginButton" type="submit">Register</Button></span>`;
    $("#password2").val("");
}
