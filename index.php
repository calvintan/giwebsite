<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="col-md-<?php echo is_active_sidebar('primary-sidebar') ? '8' : '12'; ?>">
      <main role="main">
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
        <?php } else { ?>
          <p><?php esc_html_e('Sorry, no posts matched your criteria.', '_themename') ?></p>
        <?php } ?>
      </main>
    </div>
    <?php if(is_active_sidebar('primary-sidebar')) { ?>
      <div class="col-md-4">
        <?php get_sidebar(); ?>
      </div>
    <?php } ?>
  </div>
</div>

<?php get_footer(); ?>