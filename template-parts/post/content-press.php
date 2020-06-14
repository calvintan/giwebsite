<article <?php post_class(); ?>>
  <div class="press-wrapper">
    <div class="press-logo">
      <img src="<?php the_field('press_logo'); ?>" alt="">
    </div>
    
    <?php
      $date_string = get_field('press_date');
      $date = DateTime::createFromFormat('d/m/Y', $date_string);
    ?>

    <div class="press-content">
      <ul class="press-date">
        <li>
          <?php echo $date->format('j M Y'); ?>
        </li>
        <li>
          <?php the_title(); ?>
        </li>
      </ul>
      <a href="<?php the_field('press_link'); ?>" target="_blank" rel="noopener noreferrer">
        <?php the_content(); ?>
      </a>
    </div>
  </div>
</article>