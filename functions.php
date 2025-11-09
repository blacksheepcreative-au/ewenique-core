<?php
function ewenique_core_enqueue_assets() {
    $theme_version = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'ewenique-core-style',
        get_template_directory_uri() . '/dist/style.css',
        [],
        $theme_version
    );

    wp_enqueue_script(
        'ewenique-core-scripts',
        get_template_directory_uri() . '/dist/main.js',
        [],
        $theme_version,
        true
    );
}
add_action('wp_enqueue_scripts', 'ewenique_core_enqueue_assets');

// Enable editor styles and block features
add_theme_support('wp-block-styles');
add_theme_support('editor-styles');
add_editor_style('dist/style.css');
add_theme_support('align-wide');