<article <?php post_class('c-post mb-4 col-md-4'); ?>>
  <div class="c-post__card">
    <?php if(get_the_post_thumbnail() !== '') { ?>
      <div class="c-post__thumbnail">
        <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
          <?php the_post_thumbnail('large'); ?>
        </a>
      </div>
    <?php } ?>

    <?php if('event' == get_post_type()) { ?>
      <?php
        $start_time = get_field('event_start_time');
        $end_time = get_field('event_end_time');
        $date_string = get_field('event_date');
        $date = DateTime::createFromFormat('d/m/Y', $date_string);
      ?>
      <div class="c-post__card-info">
        <ul>
          <li>
            <?php echo $date->format('j M Y'); ?>
          </li>
          <li>
            <?php echo date("H:i", strtotime($start_time)) ?> - <?php echo date("H:i", strtotime($end_time)) ?>
          </li>
        </ul>
      </div>
    <?php } ?>

    <?php if('post' == get_post_type()) { ?>
      <div class="c-post__card-info">
        <ul>
          <li>
            <?php if(get_the_term_list($post->ID, 'topic')) {
              echo strip_tags(get_the_term_list($post->ID, 'topic'));
            } else {
              echo 'Uncategorised';
            } ?>
          </li>
        </ul>
      </div>
    <?php } ?>

    <div class="c-post__card-desc">
      <h3 class="c-post__title">
        <?php
          $title = get_the_title();
          echo short_title($title);
        ?>
      </h3>
      <p><?php echo get_excerpt(); ?></p>
    </div>
  </div>
</article>
