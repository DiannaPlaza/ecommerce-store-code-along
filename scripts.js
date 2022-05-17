// querying the DOM

const formEl = document.querySelector('.menuIcon');
const slideNav = document.querySelector(".slideOutNav");

const close = document.querySelector ('.closeButton');

// adding an event listener to open up navigation slide menu when user clicks on menu icon
formEl.addEventListener('click', function openMenu() {
    
    slideNav.style.display = "block";
    
    
});

// adding an event listener to close navigation slide menu 

close.addEventListener('click', function closeMenu (){
    
    slideNav.style.display = "none";
    
});

// shop page





