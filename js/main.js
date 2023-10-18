$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: false,
    dots: false,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
});


// Get references to the navigation buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Get reference to the target element
const targetElement1 = document.getElementById('slider1');
const targetElement2 = document.getElementById('slider2');

// Add click event listeners to the buttons
button1.addEventListener('click', handleButtonClick);
button2.addEventListener('click', handleButtonClick);

// Variable to track the state of switching
let isSwitched = false;

// Function to handle button click event
function handleButtonClick(event) {
  // Get the button that was clicked
  const clickedButton = event.target;

  // Perform actions based on the clicked button
  if (isSwitched) {
    // Switch back to original positions
    targetElement1.style.transform = 'translate(0, 0)';
    targetElement1.style.transition = '0.5s ease-in-out';
    targetElement1.style.zIndex = '1';
    button1.style.color = '#acacac';


    targetElement2.style.transform = 'translate(0, 0)';
    targetElement2.style.transition = '0.5s ease-in-out';
    targetElement2.style.zIndex = '0';
    button2.style.color = 'black';

    isSwitched = false;
  } else {
    // Switch to translated positions
    targetElement1.style.transform = 'translate(100px, 115px)';
    targetElement1.style.transition = '0.5s ease-in-out';
    targetElement1.style.zIndex = '0';
    button1.style.color = 'black';


    targetElement2.style.transform = 'translate(-70px, -100px)';
    targetElement2.style.transition = '0.5s ease-in-out';
    targetElement2.style.zIndex = '1';
    button2.style.color = '#acacac';

    isSwitched = true;
  }
}
