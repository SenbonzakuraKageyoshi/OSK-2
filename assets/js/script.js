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
    closeModalButton.addEventListener('click', closeModal);

    const modalContent = document.querySelector('.modal-content-main'),
    modalTitle = document.querySelector('.modal-content__header-title');

    let step = 1;
    console.log(step)
    const answers = {
        '1': {
            question: 'Что собираетесь красить?',
            answers: [
                {name: 'Легковые автомобили', isSelected: true},
                {name: 'Грузовые автомобили', isSelected: false},
                {name: 'Металлоконструкции', isSelected: false},
                {name: 'Другое  ', isSelected: false}
            ]
        },
        '2': {
            question: 'Как планируется установить окрасочную камеру?',
            answers: [
                {name: 'На ровный пол', isSelected: true},
                {name: 'На приямок', isSelected: false},
                {name: 'На металлическое основание', isSelected: false},
            ]
        },
        '3': {
            question: 'В каких условиях будет работать камера?',
            answers: [
                {name: 'Отапливаемое помещение', isSelected: true},
                {name: 'Неотапливаемое помещение', isSelected: false},
                {name: 'В условиях улицы', isSelected: false},
            ]
        },
        '4': {
            question: 'Какой вид топлива планируете использовать?',
            answers: [
                {name: 'Природный газ', isSelected: true},
                {name: 'Электроэнергию', isSelected: false},
                {name: 'Дизельное топливо', isSelected: false},
            ]
        }
    };

    const content = 
    `
    <div class="modal-content__question">${answers[`${step}`].question}</div>
        <div class="modal-content-answers">
            ${
            answers[`${step}`].answers.map((el) => (
                `
                <div class="modal-content__answer ${el.isSelected && 'active'}">
                    <div></div>
                    ${el.name}
                </div> 
                `
            ))
            }
        </div>
        <div class="modal-content-nav">
            ${
            step !== 1
            ?
            `<button class="modal-content-nav__item decrement">Назад</button>`
            :
            `<button class="modal-content-nav__item disabled decrement" disabled>Назад</button>`
            }
            <button class="modal-content-nav__item increment">Вперед</button>
        </div>
    </div>
    `

    const increment = () => {
        if(step !== 5){
            step += 1
            return initContent(step);
        }
    };

    const decrement = () => {
        if(step !== 1){
            step -= 1
            return initContent(step);
        }
    };

    const initContent = (stepNumber) => {
        if(stepNumber === 5){
            modalContent.innerHTML =
            `
            `;

            modalTitle.innerHTML = 'Мы обязательно перезвоним Вам в ближайший рабочий день'
        }

        modalContent.innerHTML =
        `
            <div class="modal-content__question">${answers[`${stepNumber}`].question}</div>
                <div class="modal-content-answers">
                    ${
                    answers[`${stepNumber}`].answers.map((el) => (
                        `
                        <div class="modal-content__answer ${el.isSelected && 'active'}">
                            <div></div>
                            ${el.name}
                        </div> 
                        `
                    ))
                    }
                </div>
                <div class="modal-content-nav">
                    ${
                    stepNumber !== 1
                    ?
                    `<button class="modal-content-nav__item decrement">Назад</button>`
                    :
                    `<button class="modal-content-nav__item disabled decrement" disabled>Назад</button>`
                    }
                    <button class="modal-content-nav__item increment">Вперед</button>
                </div>
            </div>
        `;


        modalTitle.innerHTML = `Выберите оборудование, ответив на несколько простых вопросов (${stepNumber} / 4)`

        document.querySelector('.increment').addEventListener('click', increment)
        document.querySelector('.decrement').addEventListener('click', decrement)
    };

    initContent(step);
});