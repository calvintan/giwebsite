<?php get_header(); ?>

<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <main role="main">
        <?php get_template_part('loop', 'event'); ?>
      </main>
    </div>
  </div>
</div>

<?php get_footer(); ?>