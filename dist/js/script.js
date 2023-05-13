const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

hamburger.addEventListener('click', () => {
    hamburger.classList.add('active');
});

closeElem.addEventListener('click', () => {
    hamburger.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__value__item-percent'),
    dividers = document.querySelectorAll('.skills__value__item-score span');

percents.forEach( (item, i) => {
    dividers[i].style.width = item.innerHTML;
});