// console.log('Buttone clicked add ggfd');

// document.getElementById('button-login').addEventListener('click', function(){})

// search: form submit reloding the page

// step-1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // step-2: prevent defsult behavior (prevent reloding browser)
    event.preventDefault();
    console.log('login button clicked')

    // step-3: get the phone number 
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})