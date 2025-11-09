<?php
/**
 * Page template: full width by default
 */
get_header();
?>
<main id="main-content" class="w-full">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <!-- Full width content -->
    <div class="prose prose-slate max-w-none">
      <?php the_content(); ?>
    </div>

    <?php
      wp_link_pages([
        'before' => '<nav class="mt-6">' . esc_html__( 'Pages:', 'ewenique-core' ),
        'after'  => '</nav>',
      ]);
    ?>
  <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>