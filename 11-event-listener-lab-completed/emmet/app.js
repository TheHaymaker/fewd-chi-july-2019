

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded

  // grab a reference to the body
  var body = document.querySelector('body');
 
  // grab a reference to the input box
  var inputBox = document.querySelector('input');

  // we need to listen for some event
  inputBox.addEventListener('keyup', function(event) {
    var capturedValue = event.target.value.toLowerCase().trim();

    console.log(capturedValue);

    if(capturedValue === 'mars') {
      body.style.backgroundImage = "url('./mars.jpg')";
      // body.classList.add('mars');
    } else if(capturedValue === 'saturn') {
      body.style.backgroundImage = "url('./saturn.jpg')";
    } else if(capturedValue === 'jupiter') {
      body.style.backgroundImage = "url('./jupiter.jpg')";
    } else {
      body.style.backgroundImage = "url('./404.jpg')";
    }


  });
  
  inputBox.dispatchEvent(new Event('keyup'));

});
