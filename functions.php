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

/**
 * Auto-register blocks from src/blocks/* with compiled assets in dist/blocks/*
 */
function ewenique_core_register_blocks() {
    $theme_version = wp_get_theme()->get('Version');
    $theme_dir  = get_template_directory();
    $theme_uri  = get_template_directory_uri();

    // Find all top-level block folders in src/blocks
    $src_blocks = glob($theme_dir . '/src/blocks/*', GLOB_ONLYDIR);
    if (empty($src_blocks)) {
        return;
    }

    foreach ($src_blocks as $block_dir) {
        $slug = basename($block_dir); // e.g., eb-001-header-1

        $dist_js  = $theme_dir . "/dist/blocks/{$slug}.js";
        $dist_css = $theme_dir . "/dist/blocks/{$slug}.css";

        $editor_handle = "ewenique-{$slug}-editor";
        $style_handle  = "ewenique-{$slug}-style";

        $args = [];

        // Register editor script if built
        if (file_exists($dist_js)) {
            wp_register_script(
                $editor_handle,
                $theme_uri . "/dist/blocks/{$slug}.js",
                [ 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-i18n', 'wp-components' ],
                $theme_version,
                true
            );
            $args['editor_script'] = $editor_handle;
        }

        // Register shared CSS if built (used in editor and front)
        if (file_exists($dist_css)) {
            wp_register_style(
                $style_handle,
                $theme_uri . "/dist/blocks/{$slug}.css",
                [],
                $theme_version
            );
            $args['style'] = $style_handle;
            $args['editor_style'] = $style_handle;
        }

        // Prefer metadata registration if block.json exists
        $block_json = $block_dir . '/block.json';
        if (file_exists($block_json)) {
            register_block_type($block_dir, $args);
        } else {
            // Fallback: register with derived name (namespace dir)
            register_block_type('ewenique/' . $slug, $args);
        }
    }
}
add_action('init', 'ewenique_core_register_blocks');