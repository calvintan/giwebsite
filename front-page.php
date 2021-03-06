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

<main role="main">
  <section class="homepage-top">
    <div class="container">
      <?php get_template_part('loop', 'page'); ?>
    </div>
  </section>
  <section class="homepage-bot">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Our Approach</h3>
        </div>
        <div class="col-md-8">
          <h2>We understand that businesses want to be more responsible towards their employees, society, and the environment, yet the internal business fabric varies. This affects implementation format and program roll-out. To support these constraints, our initiatives are:</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="uneven-grid">
        <div class="uneven-left">
          <div class="uneven-left-top">
            <div class="uneven-title">
              <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/home-bot-mod.svg" alt="">
              <h3>Modular + Customisable</h3>
            </div>
            <p>All our initiatives are developed to be implemented in bite-sized chunks over a specific timeline. We create custom solutions, building on the success of our existing programs.</p>
          </div>
          <div class="uneven-left-bottom">
            <div class="uneven-title">
              <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/home-bot-collab.svg" alt="">
              <h3>Collaborative</h3>
            </div>
            <p>We work with our clients to identify these requirements, and then propose tailored partners in our community to ensure effective delivery of solutions.</p>
          </div>
        </div>
        <div class="uneven-right">
          <div class="uneven-right-top">
            <div class="uneven-title">
              <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/home-bot-data.svg" alt="">
              <h3>Data Driven</h3>
            </div>
            <p>What cannot be measured, cannot be improved. Gathering data and measuring impact are important to us. We benchmark against industry standards, set targets, and achieve them. It allows our clients to communicate with confidence and transparency the imapact they have made.</p>
          </div>
          <div class="uneven-right-bottom">
            <p>All our initiatives follow necessary legal standards and are backed by various environmental policies, corporate responsibility guidelines, ESG frameworks and recommendations for companies by the Chinese Government as well as international organisations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>