<article <?php post_class('c-post mb-4'); ?>>
  <div class="row">
    <div class="col-md-12">
      <header class="c-post__header d-flex justify-content-between">
        <h1 class="c-post__single-title">
          <?php the_title();?>
        </h1>

        <div class="project-date">
          <p>
            <?php the_field('project_start_date'); ?> –
            <?php the_field('project_end_date'); ?>
          </p>
        </div>
      </header>
    </div>
  </div>

  <div class="row">
    <div class="col-md-8 offset-md-4">
      <?php if(get_the_post_thumbnail() !== '') { ?>
        <div class="c-post__thumbnail">
          <?php the_post_thumbnail('large'); ?>
        </div>
      <?php } ?>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-md-4">
      <div class="project-subtitle">
        <?php the_field('project_subtitle_one'); ?>
      </div>
    </div>
    <div class="col-md-8">
      <div class="project-content">
        <?php the_field('project_content_one'); ?>
      </div>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-md-4">
      <div class="project-subtitle">
        <?php the_field('project_subtitle_two'); ?>
      </div>
    </div>
    <div class="col-md-8">
      <div class="project-content">
        <?php the_field('project_content_two'); ?>
      </div>
    </div>
  </div>
  
  <div class="row mt-5">
    <div class="col-md-8 offset-md-4">
      <div class="c-post__inner">
        <div class="c-post__content">
          <?php the_content(); ?>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-md-8 offset-md-4">
      Partners Logos
    </div>
  </div>
</article>