

const scriptURL = 'https://script.google.com/macros/s/AKfycbyhFqFrpSY28wTi6NiZAJfrBZRvy0auFVsmxHXr2UqBCXKXro18AaJ2sOX3CEA9ApHO1g/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.querySelector("#message");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        message.textContent = "Your form was submitted successfully!";
        setTimeout(()=>{
            message.textContent = "";
        },2000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});