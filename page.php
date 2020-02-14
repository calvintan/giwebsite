<?php get_header(); ?>

<main role="main">
  <div class="container my-5">
    <div class="row">
      <div class="col-md-<?php echo is_page( 'Contact' ) ? '8' : '12' ?> <?php echo is_page( 'Contact' ) ? 'offset-md-2' : '' ?>">
        <?php get_template_part('loop', 'page'); ?>
      </div>
    </div>
  </div>
</main>

<?php get_footer(); ?>