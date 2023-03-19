/* БУРГЕР-МЕНЮ в HEADER*/


let startBurger = document.getElementById('burger-menu');
let bodyFixed = document.getElementById('body');
let overflowBurger = document.getElementById('header-overlay');
let hiddenHeader = document.getElementById('header');

let overlayClose = document.getElementById('burger-menu-close');

startBurger.addEventListener('click', function() {
    bodyFixed.classList.toggle('scroll-hidden');
    overflowBurger.classList.toggle('active-overlay');
    hiddenHeader.classList.toggle('hidden');
})
overlayClose.addEventListener('click', function() {
    overflowBurger.classList.remove('active-overlay');
    bodyFixed.classList.remove('scroll-hidden');
    hiddenHeader.classList.toggle('hidden');
})