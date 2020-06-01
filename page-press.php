<?php get_header(); ?>

<main role="main">
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <header class="page__header">
          <h1 class="page__title">
            <?php the_title(); ?>
          </h1>
        </header>

        <div class="page__content">
          <?php the_content(); ?>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2 col-sm-12 order-md-12">
        <div class="press-filter"></div>
      </div>
      <div class="col-md-10 col-sm-12 order-md-1">
        <?php 
          $args = array( 
            'post_type' => 'press',
            'meta_key'  => 'press_date',
            'orderby' => 'meta_value_num', 
            'order' => 'DESC'
          );
          $the_query = new WP_Query( $args ); 
        ?>

        <?php if($the_query->have_posts()) { ?>
          <?php while($the_query->have_posts()) { ?>
            <?php $the_query->the_post(); ?>
            <?php get_template_part('template-parts/post/content', 'press'); ?>
          <?php } ?>
          <?php the_posts_pagination(); ?>
          <?php wp_reset_postdata(); ?>
        <?php } else { ?>
          <?php get_template_part('template-parts/post/content', 'none'); ?>
        <?php } ?>
      </div>
    </div>
  </div>
</main>
    
<?php get_footer(); ?>