<?php
/**
 * Theme header (simple, full width)
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>

<body <?php body_class('bg-white text-slate-900 antialiased'); ?>>
<?php wp_body_open(); ?>

<a class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 px-3 py-2 bg-black text-white" href="#main-content">Skip to content</a>

<header class="w-full border-b border-slate-200 bg-white">
  <div class="w-full px-4 py-4 flex items-center gap-3">
  </div>
</header>