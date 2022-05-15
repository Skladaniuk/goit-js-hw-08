import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');


const STORAGE_KEY = "feedback-form-state";



form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

function onFormData(evt) { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

};


function onFormSubmit(evt) { 
  
    const formElements = evt.currentTarget.elements;
    const mail = formElements.email.value;
    const textarea = formElements.message.value;

  if (mail === '' || textarea === '' ) { 
  alert('пустые поля')
  }
    
      console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

};


(function dataLocalStorage() {
    const formInput = document.querySelector('.feedback-form input')
    const formTextarea = document.querySelector('.feedback-form textarea')

    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data) {
        formInput.value = data.email;
        formTextarea.value = data.message;
    }

})();