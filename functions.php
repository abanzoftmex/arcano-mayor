<?php
function arcano_astral_setup() {
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'arcano_astral_setup');

function arcano_astral_enqueue_styles() {
    wp_enqueue_style('arcano-astral-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'arcano_astral_enqueue_styles');

function arcano_react_home_paths() {
    $theme_dir = get_template_directory();
    $theme_uri = get_template_directory_uri();

    return array(
        'js_file' => $theme_dir . '/frontend-app/dist/assets/home.js',
        'css_file' => $theme_dir . '/frontend-app/dist/assets/home.css',
        'js_uri' => $theme_uri . '/frontend-app/dist/assets/home.js',
        'css_uri' => $theme_uri . '/frontend-app/dist/assets/home.css',
    );
}

function arcano_has_react_home_assets() {
    $paths = arcano_react_home_paths();
    return file_exists($paths['js_file']) && file_exists($paths['css_file']);
}

function arcano_enqueue_react_home_assets() {
    if (!is_front_page()) {
        return;
    }

    if (!arcano_has_react_home_assets()) {
        return;
    }

    $paths = arcano_react_home_paths();

    wp_enqueue_style(
        'arcano-frontend-app',
        $paths['css_uri'],
        array(),
        filemtime($paths['css_file'])
    );

    wp_enqueue_script(
        'arcano-frontend-app',
        $paths['js_uri'],
        array(),
        filemtime($paths['js_file']),
        true
    );
}
add_action('wp_enqueue_scripts', 'arcano_enqueue_react_home_assets');

function arcano_react_home_script_type($tag, $handle, $src) {
    if ($handle !== 'arcano-frontend-app') {
        return $tag;
    }

    return '<script type="module" src="' . esc_url($src) . '"></script>';
}
add_filter('script_loader_tag', 'arcano_react_home_script_type', 10, 3);
