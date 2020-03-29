<?php if(have_posts()) { ?>
  <?php while(have_posts()) { ?>
    <?php the_post(); ?>

    <?php if(is_home()) { ?>
      <?php get_template_part('template-parts/page/content', 'cards'); ?>
    <?php } elseif(is_archive()) { ?>
      <?php get_template_part('template-parts/page/content', 'cards-default'); ?>
    <?php } else { ?>
      <?php get_template_part('template-parts/post/content'); ?>
    <?php } ?>
    
  <?php } ?>
  <?php the_posts_pagination(); ?>
<?php } else { ?>
  <?php get_template_part('template-parts/post/content', 'none'); ?>
<?php } ?>