document.addEventListener('DOMContentLoaded', init)

function init(){
    const emailInput = document.getElementById('email-signup-email');
    const emailSubmit = document.getElementById('email-signup-submit');
    const messageSuccess = document.querySelector('.email-signup__message--success');
    const messageError = document.querySelector('.email-signup__message--error');

    emailSubmit.addEventListener('click', emailSignupSubmit);
    emailSubmit.addEventListener('keydown', (event) => {
        if(event.keyCode === 13 || event.keyCode === 32){
            emailSignupSubmit();
        }
    });

    function emailSignupSubmit(){
        if(emailInput.value.length > 0){
            messageSuccess.classList.add('email-signup__message--show');
            messageError.classList.remove('email-signup__message--show');
        } else{
            messageSuccess.classList.remove('email-signup__message--show');
            messageError.classList.add('email-signup__message--show');
        }
    }
}