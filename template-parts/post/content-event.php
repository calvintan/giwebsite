<article <?php post_class('c-post mb-4'); ?>>
  <div class="c-post__inner">
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
      <div class="c-post__info">
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
    
    <header class="c-post__header">
      <?php if(is_single()) { ?>
        <h1 class="c-post__single-title">
          <a
            href="<?php the_permalink(); ?>"
            title="<?php the_title_attribute(); ?>">
            <?php the_title();?></a>
        </h1>
      <?php } else { ?>
        <h2 class="c-post__title">
          <a
            href="<?php the_permalink(); ?>"
            title="<?php the_title_attribute(); ?>">
            <?php the_title();?></a>
        </h2>
      <?php } ?>
      <!--
      <div class="c-post__meta">
        <?php _themename_post_meta(); ?>
      </div>
      -->
    </header>

    <?php if(is_single()) { ?>
      <div class="c-post__content">
        <?php the_content(); ?>
      </div>
    <?php } else { ?>
      <div class="c-post__excerpt">
        <?php the_excerpt(); ?>
      </div>
    <?php } ?>
    
    <?php if(!is_single()) {_themename_readmore_link();} ?>
  </div>
</article>