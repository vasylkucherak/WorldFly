//! Burger Menu
export default function burger() {
    const menuBurger = document.querySelector('.menu__burger');
    const menuBody = document.querySelector('.menu__body');
    const menuLinks = menuBody.querySelectorAll('a');
    if (menuBurger) {
        menuBurger.addEventListener('click', function(e) {
            document.body.classList.toggle('lock');
            menuBurger.classList.toggle('active');
            menuBody.classList.toggle('active');
        });
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', function(e) {
                if (menuBurger.classList.contains('active')) {
                    document.body.classList.remove('lock');
                    menuBurger.classList.remove('active');
                    menuBody.classList.remove('active');
                }
            });
        });
    }
}