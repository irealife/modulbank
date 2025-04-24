;(() => {

    let header = document.querySelector('.header');
    let burger = header.querySelector('.js-burger');
    let headerNav = header.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        if (burger.classList.contains('burger_active')) {
            burger.classList.remove('burger_active');
            headerNav.classList.remove('header__nav_active');
        } else {
            burger.classList.add('burger_active');
            headerNav.classList.add('header__nav_active');
        }
    });

})();
