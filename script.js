const navbar = document.querySelector('.main-menu');
const logoNavbar = document.querySelector('.logo-home');
const text = document.querySelectorAll('.home-menu-item-text');

window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('menu-sticky');
        logoNavbar.setAttribute("src","./assets/images/logo-home-black.png");
        text.forEach(item => {
            item.style.color = 'black';
        });
    } else if (window.scrollY < 300) {
        navbar.classList.remove('menu-sticky');
        logoNavbar.setAttribute("src","./assets/images/logo-home-white.png");
        text.forEach(item => {
            item.style.color = 'white';
        });
    }
};