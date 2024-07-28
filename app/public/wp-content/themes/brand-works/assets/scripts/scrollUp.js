window.addEventListener('DOMContentLoaded', function () {
    const scrollUp = document.querySelector('.js-scroll-up');

    if (scrollUp) {
        scrollUp.addEventListener('click', () => {
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        });
    }
});
