<?php get_header(); ?>

<div class="container">
  <div class="row">
    <main role="main">
      <div class="col-md-8">
        <?php if(have_posts()) { ?>
          <?php while(have_posts()) { ?>
            <?php the_post(); ?>
            <article <?php post_class('c-post mb-4'); ?>>
              <h2 class="c-post__title">
                <a 
                  href="<?php the_permalink(); ?>" 
                  title="<?php the_title_attribute(); ?>">
                  <?php the_title();?></a>
              </h2>
              <div class="c-post__meta">
                <?php _themename_post_meta(); ?>
              </div>
              <div class="c-post__excerpt">
                <?php the_excerpt(); ?>
              </div>
              <?php _themename_readmore_link(); ?>
            </article>
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
    </main>
  </div>
</div>

<?php get_footer(); ?>