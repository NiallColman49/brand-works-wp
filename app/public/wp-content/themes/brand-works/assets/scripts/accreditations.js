window.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $('.js-accreditations-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,

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
            ],
        });
    });
});
