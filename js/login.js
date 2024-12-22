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


  // stp3  get the phone number  and get the pin number 
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber, pinNumber);


  // stp 4 validate phone and pin 
  // this is temporay way  you should not like this 
  if(phoneNumber === '5'&& pinNumber === '1234'){
        console.log('your are logged in ');
        window.location.href = '/home.html'
        // stp 5 allow user to the use the website 
  }
  else{
    alert('wrong phone number or pin ')
  }

})