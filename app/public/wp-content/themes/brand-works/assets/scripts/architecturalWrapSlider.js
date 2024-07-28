window.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $('.js-architectural-wrap-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:
                '<i class="fa-solid fa-chevron-left text-2xl text-light-green absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-10"></i>',
            nextArrow:
                '<i class="fa-solid fa-chevron-right text-2xl text-light-green absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-10"></i>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    });
});
