<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="col-md-8">
      <main role="main">
        <?php if(have_posts()) { ?>
          <?php while(have_posts()) { ?>
            <?php the_post(); ?>
            <?php get_template_part('template-parts/post/content'); ?>
          <?php } ?>
        <?php } else { ?>
          <?php get_template_part('template-parts/post/content', 'none'); ?>
        <?php } ?>
      </main>
    </div>

    <div class="col-md-4">
      <?php get_sidebar(); ?>
    </div>

  </div>
</div>

<?php get_footer(); ?>