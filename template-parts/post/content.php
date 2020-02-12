<article <?php post_class('c-post mb-4'); ?>>
  <?php if(is_single()) { ?>
  <div class="row">
    <div class="col-md-12">
      <header class="c-post__header">
          <h1 class="c-post__single-title">
            <?php the_title();?>
          </h1>
        </header>
      </div>
    </div>
  <?php } ?>
  
  <div class="row">
    <div class="
      col-md-8 <?php if(is_single()) { ?>offset-md-4<?php } ?>">
      <div class="c-post__inner">
        <?php if(get_the_post_thumbnail() !== '') { ?>
          <div class="c-post__thumbnail">
            <?php the_post_thumbnail('large'); ?>
          </div>
        <?php } ?>

        <?php if(is_single()) { ?>
          <div class="c-post__content">
            <?php the_content(); ?>
          </div>
        <?php } else { ?>
          <h3 class="c-post__title">
            <a 
              href="<?php the_permalink(); ?>" 
              title="<?php the_title_attribute(); ?>">
              <?php the_title();?></a>
          </h3>
          <div class="c-post__excerpt">
            <?php the_excerpt(); ?>
          </div>
        <?php } ?>

        <?php if(is_single()) { ?>
          <footer class="c-post__footer">
            <?php
              if(has_category()){
                echo '<div class="c-post__cats">';
                /* translators: used between category */
                $cats_list =  get_the_category_list(esc_html__(', ', '_themename'));
                /* translators: %s is the categories list */
                printf(esc_html__('Posted in %s', '_themename'), $cats_list);
                echo '</div>';
              }
              if(has_tag()){
                echo '<div class="c-post__tags">';
                $tags_list =  get_the_tag_list('<ul><li>', '</li><li>', '</li><ul>');
                echo $tags_list;
                echo '</div>';
              }
            ?>
          </footer>
        <?php } ?>
        
        <?php if(!is_single()) {_themename_readmore_link();} ?>
      </div>
    </div>
  </div>
</article>