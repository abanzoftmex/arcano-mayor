<?php
function arcano_astral_setup() {
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'arcano_astral_setup');

function arcano_astral_enqueue_styles() {
    wp_enqueue_style('arcano-astral-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'arcano_astral_enqueue_styles');
