<?php
  $start = get_field( "project_start_date" );
  $end = get_field( "project_end_date" );
  $startDate = DateTime::createFromFormat('d/m/Y', $start);
  $endDate = DateTime::createFromFormat('d/m/Y', $end);
?>

<article <?php post_class('c-post mb-4'); ?>>
  <div class="row">
    <div class="col-md-12">
      <header class="c-post__header">
        <h1 class="c-post__single-title">
          <?php the_title();?>
        </h1>
        <div class="flex-items">
          <div class="project-date">
            <p><?php echo $startDate->format('d F Y'); ?> - <?php echo $endDate->format('d F Y'); ?></p>
          </div>
          <?php share_buttons(); ?>
        </div>
      </header>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <?php if(get_the_post_thumbnail() !== '') { ?>
        <div class="c-post__thumbnail">
          <?php the_post_thumbnail('large'); ?>
        </div>
      <?php } ?>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-12">
      <div class="c-post__inner">
        <div class="c-post__content">
          <?php the_content(); ?>
        </div>
      </div>
    </div>
  </div>

  <?php $partners = get_field('project_partners'); ?>
  <?php if( $partners ): ?>
  <div class="row mt-4">
    <div class="col-md-4">
      <h4>Partners</h4>
    </div>
    <div class="col-md-8">
      <div class="project-partners">
        <?php foreach( $partners as $partner ): ?>    
          <a class="project-partners__logo" target="_blank" rel="noopener noreferrer" href="<?php the_field('partner_url', $partner->ID); ?>">
            <img src="<?php the_field('partner_logo', $partner->ID); ?>" alt="<?php echo get_the_title( $partner->ID ); ?>">
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
  <?php endif; ?>
</article>