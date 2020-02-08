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

        <div class="page__content">
          <?php the_content(); ?>
        </div>

        <?php $alphabet = []; ?>

        <?php 
          $args = array( 
            'post_type' => 'partner',
            'posts_per_page' => -1,
            'order' => 'ASC',
            'orderby' => 'title'
          );
          $query = new WP_Query( $args ); 
        ?>
        
        <?php if($query->have_posts()) { ?>
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

          <?php
            $value = get_field( "partner_projects" );
          ?>

          <?php if ($value) : ?>
            <li>
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </li>
          <?php else: ?>
            <li><?php the_title(); ?></li>
          <?php endif; ?>

          <?php
            $alphabet[$firstLetter][] = ob_get_contents();
            ob_end_clean();
          ?>

          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
        <?php } ?>
      
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
    </div>
  </div>
</main>

<?php get_footer(); ?>