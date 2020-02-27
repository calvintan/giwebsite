<?php get_header(); ?>

<main role="main">
  <div class="container my-5">
    
    <?php if(have_posts()) { ?>
      <?php while(have_posts()) { ?>
      <?php the_post(); ?>

      <div class="row">
        <div class="col-md-12">
          <header class="page__header">
            <h1 class="page__title">
              <?php the_title(); ?>
            </h1>
          </header>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7">
          <div class="page__content">
            <?php the_field('contact_form'); ?>
          </div>
        </div>
        <div class="col-md-4 offset-md-1">
            <?php the_content(); ?>
        </div>
      </div>

      <?php } ?>
    <?php } ?>

  </div>
</main>

<?php get_footer(); ?>