// add money to the account 
/**
 * s-1 add event hanler 
  prevent page reload after form submit 
  s -2  get money to be  added to the accout balance 
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
        console.log(pinNumberInput);

})