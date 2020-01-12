<aside class="lists-box">
  <?php if(get_the_post_thumbnail() !== '') { ?>
    <?php $image_url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>
    <?php echo '<div class="lists-inner" style="background: url('. $image_url .') no-repeat; background-size: cover;">'; ?>
      <a  class="lists-title" 
          href="<?php the_permalink(); ?>" 
          title="<?php the_title_attribute(); ?>">
          <?php the_title();?></a>
    <?php echo '</div>'; ?>
  <?php } ?>
  <?php if('event' == get_post_type()) { ?>
    <?php
      $date_string = get_field('event_date');
      $date = DateTime::createFromFormat('d/m/Y', $date_string);
    ?>
    <div class="lists-date mt-2">
      <p><?php echo $date->format('l'); ?></p>
      <p><?php echo $date->format('j M Y'); ?></p>
    </div>
  <?php } ?>
</aside>