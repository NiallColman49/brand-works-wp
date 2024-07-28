window.addEventListener('DOMContentLoaded', function () {
    let accordion = (function () {
        let $accordion = $('.js-accordion');
        let $accordion_header = $accordion.find('.js-accordion-header');
        let $accordion_item = $('.js-accordion-item');

        // default settings
        let settings = {
            // animation speed
            speed: 400,

            // close all other accordion items if true
            oneOpen: false,
        };

        return {
            // pass configurable object literal
            init: function ($settings) {
                $accordion_header.on('click', function () {
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

                // ensure only one accordion is active if oneOpen is true
                if (
                    settings.oneOpen &&
                    $('.js-accordion-item.active').length > 1
                ) {
                    $('.js-accordion-item.active:not(:first)').removeClass(
                        'active'
                    );
                }

                // reveal the active accordion bodies
                $('.js-accordion-item.active')
                    .find('> .js-accordion-body')
                    .show();
            },
            toggle: function ($this) {
                if (
                    settings.oneOpen &&
                    $this[0] !=
                        $this
                            .closest('.js-accordion')
                            .find(
                                '> .js-accordion-item.active > .js-accordion-header'
                            )[0]
                ) {
                    $this
                        .closest('.js-accordion')
                        .find('> .js-accordion-item')
                        .removeClass('active')
                        .find('.js-accordion-body')
                        .slideUp();
                    // Added by Aman
                    $this
                        .parentsUntil('.main-container')
                        .find('.js-accordion-item')
                        .removeClass('active')
                        .find('.js-accordion-body')
                        .slideUp();
                }

                // show/hide the clicked accordion item
                $this.closest('.js-accordion-item').toggleClass('active');

                // Toggle background color and rotation of the plus icon for all accordion items
                $('.js-accordion-item').each(function () {
                    if ($(this).hasClass('active')) {
                        $(this)
                            .find('.flex')
                            .removeClass('bg-[#F4F4F4]')
                            .addClass('bg-light-green');
                        $(this).find('.fa-plus').addClass('rotate-45');
                        $(this)
                            .siblings()
                            .find('.flex')
                            .addClass('bg-[#F4F4F4]')
                            .removeClass('bg-light-green');
                        $(this)
                            .siblings()
                            .find('.fa-plus')
                            .removeClass('rotate-45');
                    } else {
                        $(this)
                            .find('.flex')
                            .addClass('bg-[#F4F4F4]')
                            .removeClass('bg-light-green');
                        $(this).find('.fa-plus').removeClass('rotate-45');
                    }
                });

                $this.next().stop().slideToggle(settings.speed);
            },
        };
    })();

    $(document).ready(function () {
        accordion.init({ speed: 300, oneOpen: true });
    });
});
