<article <?php post_class('c-post mb-4 col-md-4'); ?>>
  <?php if(get_the_post_thumbnail() !== '') { ?>
    <div class="c-post__thumbnail">
      <?php the_post_thumbnail('large'); ?>
    </div>
  <?php } ?>

  <?php if('event' == get_post_type()) { ?>
    <?php
      $start_time = get_field('event_start_time');
      $end_time = get_field('event_end_time');
      $location = get_field('event_location');
      
      $date_string = get_field('event_date');
      $date = DateTime::createFromFormat('d/m/Y', $date_string);
    ?>
    <div class="c-post__event-info">
      <ul>
        <li>
          <span><i class="far fa-calendar"></i></span>
          <span>
            <?php echo $date->format('j M Y'); ?>, 
            <?php echo $start_time; ?> – <?php echo $end_time; ?>
          </span>
        </li>
        <li>
          <span><i class="fas fa-map-marker-alt"></i></span>
          <?php if( $location ): ?>
            <?php foreach( $location as $l ): ?>
              <?php echo get_the_title( $l->ID ); ?>
            <?php endforeach; ?>
          <?php endif; ?>
        </li>
      </ul>
    </div>
  <?php } ?>
  
  <div class="c-post__card">
    <h3 class="c-post__title">
      <a
        href="<?php the_permalink(); ?>"
        title="<?php the_title_attribute(); ?>">
        <?php the_title();?></a>
    </h3>
    <p><?php echo get_excerpt(); ?></p>
  </div>
</article>
