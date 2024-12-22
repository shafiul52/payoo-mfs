// add money to the account 
/**
 * s-1 add event hanler 
  prevent page reload after form submit 
  *s -2  get money to be  added to the accout balance 
   get the pin number 

 *   s-3  verify the pin number 
 * 
 * 
 * 
 */

// stp1 add an event handler to the add money button inside the form 
document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();
  
    // s -2  get money to be  added to the accout
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        // get the pin number provided 

        const  pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(typeof pinNumberInput);

    // stp 3 
    // wrong way to pin number 
    if(pinNumberInput=== '1234'){
        console.log('adding money to your account ')

        // stp4  get  the  current balance 
        const balance  = document.getElementById('account-balance').innerText;
        console.log(typeof balance)


        // stp -5 add money input with balance 
       const addMoneyNumber = parseFloat(addMoneyInput);
       const balanceNumber = parseFloat(balance);
        const newBalance  = addMoneyNumber + balanceNumber;
        console.log(newBalance)


         // stp 6 update  the  balance in the UI/dom 
         document.getElementById('account-balance').innerText = newBalance;






    }

    else{
        alert('failed to add money! Please try again.')
      }


})