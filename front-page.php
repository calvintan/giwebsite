<?php get_header(); ?>

<div id="carousel-homepage" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-homepage" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-homepage" data-slide-to="1"></li>
    <li data-target="#carousel-homepage" data-slide-to="2"></li>
    <li data-target="#carousel-homepage" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container">
        <p>Eleven years of initiating positive changes towards a greener China</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <p>Eleven years of eco-learning and actions for a greener China</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <p>700+ community and corporate activities attended by 30,000+ people</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <p>We are creating a world where individuals can live healthily, in harmony with nature</p>
      </div>
    </div>
  </div>
</div>

<div class="container my-5">
  <div class="row">
    <div class="col-md-12">
      <main role="main">
        <?php get_template_part('loop', 'page'); ?>
        <?php
          $event_exists = post_type_exists( 'event' );
          $project_exists = post_type_exists( 'project' );
          $event_count = wp_count_posts('event') -> publish;
          $project_count = wp_count_posts('project') -> publish;
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
          <h2>Projects</h2>
          <div class="lists-wrapper">
            <?php
              $args = array(
                'post_type' => 'project',
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
          <a class="lists-link" href="<?php echo home_url() ?>/projects">View All Projects</a>
          <?php } ?>
        </div>
      </main>
    </div>
  </div>
</div>

<?php get_footer(); ?>