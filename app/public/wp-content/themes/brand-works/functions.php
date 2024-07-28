<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @link https://github.com/timber/starter-theme
 */

namespace App;

use Timber\Timber;

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/StarterSite.php';

Timber::init();

new StarterSite();

add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_script(
        'accreditations',
        get_stylesheet_directory_uri() . '/assets/scripts/accreditations.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'architecturalWrapSlider',
        get_stylesheet_directory_uri() . '/assets/scripts/architecturalWrapSlider.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'autoplayingSlider',
        get_stylesheet_directory_uri() . '/assets/scripts/autoplayingSlider.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'faqAccordion',
        get_stylesheet_directory_uri() . '/assets/scripts/faqAccordion.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'imageSliderReveal',
        get_stylesheet_directory_uri() . '/assets/scripts/imageSliderReveal.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'loadMore',
        get_stylesheet_directory_uri() . '/assets/scripts/loadMore.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'megaMenu',
        get_stylesheet_directory_uri() . '/assets/scripts/megaMenu.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'scrollUp',
        get_stylesheet_directory_uri() . '/assets/scripts/scrollUp.js',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'trustedBy',
        get_stylesheet_directory_uri() . '/assets/scripts/trustedBy.js',
        array(),
        '1.0.0',
        true
    );
});