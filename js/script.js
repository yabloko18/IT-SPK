"use strict"
/* JS для мобильной шапки */
const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body')
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}

/* JS для изменения состояния шапки при скроле */
const docHeader = document.querySelector('header.header');
const docHeaderHeight = docHeader.offsetHeight;
if (docHeader) {
    window.addEventListener('scroll', onDocumentScroll);
    window.addEventListener('resize', onDocumentScroll);
    onDocumentScroll();
}
function onDocumentScroll() {
    let windowPosition = window.pageYOffset
    if (windowPosition > docHeaderHeight) {
        docHeader.classList.add('_active')
    } else  {
        docHeader.classList.remove('_active')
    }
}

/* JS для скрола до секций */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        e.preventDefault();

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top - document.querySelector('header.header').offsetHeight;
            if (iconMenu) {
                const menuBody = document.querySelector('.menu__body')
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active')
                menuBody.classList.remove('_active')
            }

            window.scrollBy({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
        }
    }
}

/* JS для формы */
const form = document.querySelector('form.request__form');
let name = form.elements.name,
    tel = form.elements.tel,
    email = form.elements.email,
    message = form.elements.message,
    checkbox = form.elements.checkbox_1;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    name.value = '';
    tel.value = '';
    email.value = '';
    message.value = '';
    checkbox.checked = false;
    alert('Заявка успешно отправлена!');
})