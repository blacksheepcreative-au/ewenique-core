<?php
/**
 * Theme footer (full width)
 */
?>
<footer class="w-full border-t border-slate-200 bg-white">
  <div class="w-full px-4 py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-slate-600">
    <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>