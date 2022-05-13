import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailItem = document.querySelector('.feedback-form input')
const messageItem = document.querySelector('.feedback-form textarea')


const STORAGE_KEY = "feedback-form-state";



form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

function onFormData(evt) { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

};


function onFormSubmit(evt) { 
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

};


function dataLocalStorage() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data) {
        emailItem.value = data.emailItem;
        messageItem.value = data.messageItem;
    }

}