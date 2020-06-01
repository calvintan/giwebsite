<?php get_header(); ?>

<?php
  $args = array(
    'post_type' => 'slider',
    'posts_per_page' => -1,
    'order' => 'ASC',
    'orderby' => 'title'
  );
  $slider = new WP_Query( $args );
?>
<div id="carousel-homepage" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <?php if($slider->have_posts()) { ?>
      <?php while($slider->have_posts()) { ?>
        <?php $slider->the_post(); ?>
        <li data-target="#carousel-homepage" data-slide-to="<?php echo $slider->current_post; ?>" class="<?php echo ( $slider->current_post == 0 ) ? 'active' : '' ?>"></li>
      <?php } ?>
    <?php } ?>
  </ol>
  <?php rewind_posts(); ?>
  <div class="carousel-inner">
    <?php if($slider->have_posts()) { ?>
      <?php while($slider->have_posts()) { ?>
        <?php $slider->the_post(); ?>
        <div class="carousel-item <?php echo ( $slider->current_post == 0 ) ? 'active' : '' ?>">
          <div class="container">
            <?php the_content(); ?>
          </div>
        </div>
      <?php } ?>
    <?php } ?>
  </div>
</div>
<?php wp_reset_postdata(); ?>

<div class="container my-5">
  <div class="row">
    <div class="col-md-12">
      <main role="main">
        <?php get_template_part('loop', 'page'); ?>
        <?php
          $event_exists = post_type_exists( 'event' );
          $project_exists = post_type_exists( 'initiative' );
          $event_count = wp_count_posts('event') -> publish;
          $project_count = wp_count_posts('initiative') -> publish;
        ?>
        <div class="lists-homepage">
          <?php if($event_exists && $event_count > 0) { ?>
          <h2>Events</h2>
          <div class="lists-wrapper">
            <?php
              $args = array(
                'post_type' => 'event',
                'posts_per_page' => 4,
                'meta_key'  => 'event_date',
                'orderby' => 'meta_value_num',
                'order' => 'DESC'
              );
              $the_query = new WP_Query( $args );
            ?>

            <?php if($the_query->have_posts()) { ?>
              <?php while($the_query->have_posts()) { ?>
                <?php $the_query->the_post(); ?>
                <?php get_template_part('template-parts/page/content', 'list'); ?>
              <?php } ?>
              <?php the_posts_pagination(); ?>
              <?php wp_reset_postdata(); ?>
            <?php } else { ?>
              <?php get_template_part('template-parts/post/content', 'none'); ?>
            <?php } ?>
          </div>
          <a class="lists-link" href="<?php echo home_url() ?>/events">View All Events</a>
          <?php } ?>
        </div>
        <div class="lists-homepage">
          <?php if($project_exists && $project_count > 0) { ?>
          <h2>Initiatives</h2>
          <div class="lists-wrapper">
            <?php
              $args = array(
                'post_type' => 'initiative',
                'posts_per_page' => 4,
                'meta_key'  => 'project_end_date',
                'orderby' => 'meta_value_num',
                'order' => 'DESC'
              );
              $the_query = new WP_Query( $args );
            ?>

            <?php if($the_query->have_posts()) { ?>
              <?php while($the_query->have_posts()) { ?>
                <?php $the_query->the_post(); ?>
                <?php get_template_part('template-parts/page/content', 'list'); ?>
              <?php } ?>
              <?php the_posts_pagination(); ?>
              <?php wp_reset_postdata(); ?>
            <?php } else { ?>
              <?php get_template_part('template-parts/post/content', 'none'); ?>
            <?php } ?>
          </div>
          <a class="lists-link" href="<?php echo home_url() ?>/initiatives">View All Initiatives</a>
          <?php } ?>
        </div>
      </main>
    </div>
  </div>
</div>

<?php get_footer(); ?>