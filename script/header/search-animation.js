let searchOpen = document.getElementById('search-open');
let searchSection = document.getElementById('section-search');
let searchClose = document.getElementById('search-close');

let searchClear = document.getElementById('search-value');

searchOpen.addEventListener ('click', function() {
    searchSection.classList.toggle('Visible');
});
searchClose.addEventListener ('click', function() {
    searchSection.classList.remove('Visible');
});