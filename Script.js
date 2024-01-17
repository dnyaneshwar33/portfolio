var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu =document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

// /............



const scriptURL = 'https://script.google.com/macros/s/AKfycbx779AQw36ylRSPsUGFQ3Ha5LqS4XOqVzRGfBZCp5QcGXjn-qKlxb_MAwH4Kz16zPpXLg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Form submited THANK YOU"
        setTimeout(function(){
            msg.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


//   .............
// Add an event listener for the scroll event
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');

    // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
    if (window.pageYOffset > 100) {
        header.classList.add('sticky'); // Add the sticky class
    } else {
        header.classList.remove('sticky'); // Remove the sticky class
    }
});

// active button in menu
