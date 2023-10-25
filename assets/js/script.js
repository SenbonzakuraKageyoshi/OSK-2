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
    
    const navLinks = document.querySelectorAll('.nav__link'),
    formLinks = document.querySelectorAll('.form-anchor'),
    catalogLink = document.querySelector('.section-top__link');

    const scrollToSection = (e) => document.querySelector(`.${e.target.getAttribute('data-to')}`).scrollIntoView({behavior: "smooth"})

    navLinks.forEach((el) => el.addEventListener('click', scrollToSection));
    formLinks.forEach((el) => el.addEventListener('click', scrollToSection));
    catalogLink.addEventListener('click', scrollToSection)

    const modalTriggers = document.querySelectorAll('.modal-trigger'),
    modal = document.querySelector('.modal'),
    closeModalButton = document.querySelector('.modal-content__close');

    const openModal = () => {
        modal.classList.add('active');
        modal.addEventListener('click', ({ target }) => activateCloseModalArea(target))
    };

    const activateCloseModalArea = (target) => {
        if(target.className === 'modal active'){
            modal.classList.remove('active');
            modal.removeEventListener('click', activateCloseModalArea)
        }
    }

    const closeModal = () => {
        modal.classList.remove('active');
        modal.removeEventListener('click', activateCloseModalArea)
    };

    modalTriggers.forEach((el) => el.addEventListener('click', openModal));
    closeModalButton.addEventListener('click', closeModal)
});