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

      <?php
        $date_args = array(
          'post_type'   => 'event',
          'meta_key' => 'event_date',
          'orderby' => 'meta_value_num',
          'order' => 'DESC',
          'meta_query'=> array(
              array(
                'key' => 'event_date',
                'compare' => '<',
                'value' => date("Y-m-d"),
                'type' => 'DATE'
              )
          ),
        );
        $the_query = new WP_Query( $date_args );
      ?>

      <?php if($the_query->have_posts()) { ?>
        <?php while($the_query->have_posts()) { ?>
          <?php $the_query->the_post(); ?>
          <?php get_template_part('template-parts/page/content', 'cards'); ?>
        <?php } ?>
        <?php the_posts_pagination(); ?>
        <?php wp_reset_postdata(); ?>
      <?php } else { ?>
        <?php get_template_part('template-parts/post/content', 'none'); ?>
      <?php } ?>
    </div>
  </div>
</main>

<?php get_footer(); ?>