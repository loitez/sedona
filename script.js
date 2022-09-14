const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    toggleClass('active', menu);
    toggleClass('active', menuBtn);
})

function toggleClass(className, selector) {
    selector.classList.toggle(className);
}