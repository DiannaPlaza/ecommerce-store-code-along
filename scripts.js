// adding an event listener to open up navigation slide menu when user clicks on menu icon

const formEl = document.querySelector('.menuIcon');
const slideNav = document.querySelector(".slideOutNav");

const close = document.querySelector ('.closeButton');


formEl.addEventListener('click', function openMenu() {
    
    slideNav.style.display = "block";
    
    
});

close.addEventListener('click', function closeMenu (){

    slideNav.style.display = "none";
    
});

