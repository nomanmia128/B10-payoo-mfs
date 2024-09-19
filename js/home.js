// add money to the account
/*
 s-1: add evet handler
 prevent page reload after submit
 s-2: get money to be added to the account balanse
 get the pin number

 s-3: verify the pin number
 */

// step-1: add an event handler to the add money button inside the from
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload from submit
    event.preventDefault();

    // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3: verify pin number
    // worong way to validate pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        // step-4: get the current balance
        const balance = document.getElementById('acount-balance').innerText;
        console.log(balance)

        // step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step-6: update the balance in the UI/DOM
        document.getElementById('acount-balance').innerText = newBalance;

    }
    else{
        alert('Falied to add money! please try agin.')
    }

})