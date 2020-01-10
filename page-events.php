<?php get_header(); ?>

<div class="container my-5">
  <div class="row">
    <div class="col-md-8">
      <main role="main">
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
      </main>
    </div>
  </div>
</div>

<?php get_footer(); ?>