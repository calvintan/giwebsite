<article <?php post_class('c-post mb-4 col-md-4'); ?>>
  <?php if(get_the_post_thumbnail() !== '') { ?>
    <div class="c-post__thumbnail">
      <?php the_post_thumbnail('large'); ?>
    </div>
  <?php } ?>

  <?php if('event' == get_post_type()) { ?>
    <?php
      $date_string = get_field('event_date');
      $date = DateTime::createFromFormat('d/m/Y', $date_string);
    ?>
    <div class="c-post__card-info">
      <ul>
        <li>
          <span>
            <?php echo $date->format('l'); ?>
          </span>
        </li>
        <li>
          <span>
            <?php echo $date->format('j F Y'); ?>
          </span>
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
