const navlinks = document.getElementsByTagName('nav')[0];
const burgerButton = document.getElementById('burgerButton');

function toggleNavLinks() {
    navlinks.classList.toggle('open');
}

burgerButton.addEventListener('click', toggleNavLinks)