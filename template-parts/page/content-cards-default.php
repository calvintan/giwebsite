<article <?php post_class('c-post mb-4 col-md-4'); ?>>
  <div class="c-post__card">
    <?php if(get_the_post_thumbnail() !== '') { ?>
      <div class="c-post__thumbnail">
        <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
          <?php the_post_thumbnail('large'); ?>
        </a>
      </div>
    <?php } ?>

    <div class="c-post__card-desc">
      <h3 class="c-post__title">
        <?php
          $title = get_the_title();
          echo short_title($title);
        ?>
      </h3>
      <p><?php echo get_excerpt(); ?></p>
    </div>
  </div>
</article>
