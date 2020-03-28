<?php get_header(); ?>

<main role="main">
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <header class="page__header">
          <?php the_archive_title('<h1 class="page__title">', '</h1>'); ?>
          
          <?php /* the_archive_description('<p>', '</p>'); */ ?>
        </header>
      </div>
    </div>
    <div class="row">
      <?php get_template_part('loop', 'index'); ?>
    </div>
  </div>
</main>

<?php get_footer(); ?>