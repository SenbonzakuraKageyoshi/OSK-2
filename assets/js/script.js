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
});