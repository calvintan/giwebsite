<?php get_header(); ?>

<main role="main">
  <div class="container my-5">

  <?php if(have_posts()) { ?>
    <?php while(have_posts()) { ?>
      <?php the_post(); ?>

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

    <?php } ?>
  <?php } ?>
    
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
        <h2 class="page__subtitle">
          <?php esc_html_e( 'Our Team', '_themename' ); ?>
        </h2>
      </header>

      <div class="row">
        <?php while( $team_query->have_posts() ) : $team_query->the_post(); ?>
          <?php
            $object = (object) [
              'pos' => get_field( "member_position" ),
              'why' => get_field( "member_reason" ),
              'email' => get_field( "member_email" ),
              'website' => get_field( "member_website" ),
              'facebook' => get_field( "member_facebook" ),
              'linkedin' => get_field( "member_linkedin" ),
              'weibo' => get_field( "member_weibo" )
            ];
          ?>

          <div class="col-md-3 col-6">
            <div class="team-member">
              <a href="#" data-toggle="modal" data-target="#teamModal">
                <?php the_post_thumbnail('thumbnail'); ?>
              </a>
              <p class="team-member__name">
                <?php the_title(); ?>
              </p>
              <?php foreach ($object as $key => $value) : ?>
                <?php if($value) { ?>
                <div class="team-member__<?php echo $key; ?>">
                  <?php echo $value; ?>
                </div>
                <?php } ?>
              <?php endforeach;?>
            </div>
          </div>
        <?php endwhile; ?>
      </div>
    </div>
  <?php endif; ?>
  <?php wp_reset_query(); ?>

  <?php 
    $args = array( 
      'post_type' => 'member',
      'posts_per_page' => -1,
      'meta_key'  => 'member_type',
      'meta_value'	=> 'Advisory Board',
      'order' => 'ASC',
      'orderby' => 'date'
    );
    $team_query = new WP_Query( $args ); 
  ?>

  <?php if( $team_query->have_posts() ): ?>
    <div class="team">
      <header class="page__header">
        <h2 class="page__subtitle">
          <?php esc_html_e( 'Advisors', '_themename' ); ?>
        </h2>
      </header>

      <div class="row">
        <?php while( $team_query->have_posts() ) : $team_query->the_post(); ?>
          <?php
            $object = (object) [
              'pos' => get_field( "member_position" ),
              'why' => get_field( "member_reason" ),
              'email' => get_field( "member_email" ),
              'website' => get_field( "member_website" ),
              'facebook' => get_field( "member_facebook" ),
              'linkedin' => get_field( "member_linkedin" ),
              'weibo' => get_field( "member_weibo" )
            ];
          ?>

          <div class="col-md-3 col-6">
            <div class="team-member">
              <a href="#" data-toggle="modal" data-target="#teamModal">
                <?php the_post_thumbnail('thumbnail'); ?>
              </a>
              <p class="team-member__name">
                <?php the_title(); ?>
              </p>
              <?php foreach ($object as $key => $value) : ?>
                <?php if($value) { ?>
                <div class="team-member__<?php echo $key; ?>">
                  <?php echo $value; ?>
                </div>
                <?php } ?>
              <?php endforeach;?>
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
          <h2 class="page__subtitle">
            <?php esc_html_e( 'Past Volunteers & Interns', '_themename' ); ?>
          </h2>
        </header>
  
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
      <?php wp_reset_postdata(); ?>
    <?php endif; ?>

    <?php ksort($alphabet); ?>
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

  <div class="modal fade" id="teamModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <h5 class="modal-title">
                  <?php esc_html_e( 'Title', '_themename' ); ?> 
                </h5>
                <p class="modal-pos">
                  <?php esc_html_e( 'Position', '_themename' ); ?> 
                </p>
              </div>
              <div class="col-md-8">
                <div class="modal-why"></div>
                <ul class="modal-social">
                  <li class="modal-email"></li>
                  <li class="modal-website"></li>
                  <li class="modal-facebook"></li>
                  <li class="modal-linkedin"></li>
                  <li class="modal-weibo"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<?php get_footer(); ?>

      
