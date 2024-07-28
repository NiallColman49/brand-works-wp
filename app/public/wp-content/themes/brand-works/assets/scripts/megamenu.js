const toggle = document.querySelector('.js-services-toggle i');

if (toggle) {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('rotate-180');

        const megaMenu = document.querySelector('.js-mega-menu');
        megaMenu.classList.toggle('hidden');
    });
}
