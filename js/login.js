// console.log('button clicking file added ')
// document. get ElementByid('id') addEventlistener (''click, fun)

// document.getElementById('button-login')
// .addEventListener('click',function(){
       
// })


// form submit reloading the page 
// stp:1 set event handler 
document.getElementById('button-login')
.addEventListener('click',function(event){
    // stp2 prevent default behavior (reloading browser )
    event.preventDefault(); // ata aktu jotil lagba
 console.log('login button clicked');


  // stp3  get the phone number 
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber)

})