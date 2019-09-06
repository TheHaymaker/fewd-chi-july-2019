var planets = [
  'earth',
  'mars',
  'jupiter',
  'saturn'
];

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded

  // grab a reference to the body
  var body = document.querySelector('body');
 
  // grab a reference to the select box
  var selectBox = document.querySelector('#planet-name');

  for (var i = 0; i < planets.length; i++) {
    // planets[i]

    // create an html element - option attributes object
    var attributes = {
      value: planets[i],
      text: planets[i].charAt(0).toUpperCase() + planets[i].slice(1)
    };

    // create the option with the attributes
    var option = document.createElement("option");
    option.text = attributes.text;
    option.value = attributes.value;

    // add it to our select box
    selectBox.add(option);
    // console.log(option);
  }
  // we need to listen for some event
  selectBox.addEventListener('change', function(event) {
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
  
  selectBox.dispatchEvent(new Event('change'));

});
