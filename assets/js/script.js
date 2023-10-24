window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header')
    menuButton = document.querySelector('.menu-button');

    const toggleMenu = () => header.classList.toggle('active');

    menuButton.addEventListener('click', toggleMenu);

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 1500,
        }
    });
    
    const navLinks = document.querySelectorAll('.header-nav__link');
    const formLinks = document.querySelectorAll('.form-anchor');
    const catalogLink = document.querySelector('.section-top__link');

    const scrollToSection = (e) => document.querySelector(`.${e.target.getAttribute('data-to')}`).scrollIntoView({behavior: "smooth"})

    navLinks.forEach((el) => el.addEventListener('click', scrollToSection));
    formLinks.forEach((el) => el.addEventListener('click', scrollToSection));
    catalogLink.addEventListener('click', scrollToSection)
});