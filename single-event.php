<?php get_header(); ?>

<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <main role="main">
        <?php get_template_part('loop', 'event'); ?>

        <?php 
          $posts = get_field('event_location');

          if( $posts ): ?>
          <ul>
            <?php foreach( $posts as $p ): // variable must NOT be called $post (IMPORTANT) ?>
              <li>
                <p><?php echo get_the_title( $p->ID ); ?></p>
              </li>
              <li>
                <p><?php the_field('location_metro', $p->ID); ?></p>
              </li>
          <?php endforeach; ?>
          </ul>

        <?php endif; ?>
      </main>
    </div>
  </div>
</div>

<?php get_footer(); ?>