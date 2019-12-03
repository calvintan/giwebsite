<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="col-md-8"><
      <?php if(have_posts()) { ?>
        <?php while(have_posts()) { ?>
          <?php the_post(); ?>
          <h2>
            <a 
              href="<?php the_permalink(); ?>" 
              title="<?php the_title_attribute(); ?>">
              <?php the_title();?></a>
          </h2>
          <div>
            <?php _themename_post_meta(); ?>
          </div>
          <div>
            <?php the_excerpt(); ?>
          </div>
          <?php _themename_readmore_link(); ?>
        <?php } ?>
        <?php the_posts_pagination(); ?>
        <!-- Example of a custom hook below. Function is in functions.php -->
        <!-- Place this anywhere in your theme to trigger an action -->
        <?php do_action('_themename_after_pagination'); ?>
      <?php } else { ?>
        <p><?php esc_html_e('Sorry, no posts matched your criteria.', '_themename') ?></p>
      <?php } ?>
    </div>
    <div class="col-md-4">
      <?php get_sidebar(); ?>
    </div>
  </div>
</div>

<?php get_footer(); ?>