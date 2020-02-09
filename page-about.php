<?php get_header(); ?>

<main role="main">
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <header class="page__header">
          <h1 class="page__title">
            <?php the_title(); ?>
          </h1>
        </header>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <div class="page__content">
          <?php the_content(); ?>
        </div>
      </div>
    </div>

    <?php 
      $args = array( 
        'post_type' => 'member',
        'posts_per_page' => -1,
        'meta_key'  => 'member_type',
        'meta_value'	=> 'Current Team',
        'order' => 'ASC',
        'orderby' => 'date'
      );
      $team_query = new WP_Query( $args ); 
    ?>

    <?php if( $team_query->have_posts() ): ?>
      <div class="team">
        <header class="page__header">
          <h1 class="page__title">
            Our Team
          </h1>
        </header>
  
        <div class="row">
          <?php while( $team_query->have_posts() ) : $team_query->the_post(); ?>
            <div class="col-md-3">
              <div class="team-member">
                <a href="#">
                  <?php the_post_thumbnail('thumbnail'); ?>
                </a>
                <p class="team-member__name">
                  <?php the_title(); ?>
                </p>
                <p class="team-member__pos">
                  <?php the_field('member_position'); ?>
                </p>
              </div>
            </div>
          <?php endwhile; ?>
        </div>
      </div>
    <?php endif; ?>
    <?php wp_reset_query(); ?>

    <?php $alphabet = []; ?>
    <?php 
      $args = array( 
        'post_type' => 'member',
        'posts_per_page' => -1,
        'meta_key'  => 'member_type',
        'meta_value'	=> 'Past Volunteers',
        'order' => 'ASC',
        'orderby' => 'date'
      );
      $query = new WP_Query( $args ); 
    ?>

    <?php if( $query->have_posts() ): ?>
      <div class="volunteers">
        <header class="page__header">
          <h1 class="page__title">
            Volunteers
          </h1>
        </header>
  
        <div class="row">
          <?php while( $query->have_posts() ) : $query->the_post(); ?>

          <?php
            // Start the output buffer
            ob_start();
            
            // Get the first letter of the post title    
            $firstLetter = substr(get_the_title(), 0, 1);
            
            // If this is the first instance of this letter, add it to the list.    
            if (! isset($alphabet[$firstLetter])) {
              $alphabet[$firstLetter] = [];
            }
          ?>
          
          <li><?php the_title(); ?></li>

          <?php
            $alphabet[$firstLetter][] = ob_get_contents();
            ob_end_clean();
          ?>

          <?php endwhile; ?>
        </div>
      </div>
      <?php wp_reset_postdata(); ?>
    <?php endif; ?>

    <ul class="glossary">
      <?php foreach ($alphabet as $letter => $items) : ?>
        <li>
          <h3><?php echo $letter; ?></h3>
          <ul class="glossary-items">
            <?php foreach ($items as $item) : ?>
              <?php echo $item; ?>
            <?php endforeach;?>
          </ul>
        </li>
      <?php endforeach;?>
    </ul>
  </div>
</main>

<?php get_footer(); ?>

      
