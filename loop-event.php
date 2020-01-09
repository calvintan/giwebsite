<?php 
$args = array( 
  'post_type' => 'event'
);
$the_query = new WP_Query( $args ); 
?>

<?php if($the_query->have_posts()) { ?>
  <?php while($the_query->have_posts()) { ?>
    <?php $the_query->the_post(); ?>
    <?php get_template_part('template-parts/post/content', 'event'); ?>
  <?php } ?>
  <?php the_posts_pagination(); ?>
  <?php wp_reset_postdata(); ?>
<?php } else { ?>
  <?php get_template_part('template-parts/post/content', 'none'); ?>
<?php } ?>