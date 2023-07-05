const throttle = require('lodash.throttle');

const formFeedBack = document.querySelector(".feedback-form");
const emailForm = formFeedBack.querySelector('input[name="email"]');
const messageForm = formFeedBack.querySelector('textarea[name="message"]');
const FORM_KEY = 'feedback-form-state';

try {
    let fromLS = JSON.parse(localStorage.getItem(FORM_KEY));


    emailForm.value = fromLS.email;
    messageForm.value = fromLS.message;
} catch { }

formFeedBack.addEventListener('input', throttle(toLocalStorage, 500));
 
    
function toLocalStorage() { 

     const toLS = {
        email: emailForm.value.trim(),
        message: messageForm.value.trim()
   };   
//    console.log(toLS);
    localStorage.setItem(FORM_KEY, JSON.stringify(toLS));
}

formFeedBack.addEventListener('submit', clearForm);

function clearForm(evt) { 
    evt.preventDefault();
    const dataLS = JSON.parse(localStorage.getItem(FORM_KEY));
    console.log(dataLS);
    localStorage.removeItem(FORM_KEY);
    emailForm.value = '';
    messageForm.value = '';   
}
 