<header class="c-post__header">
  <h1 class="c-post__single-title">
    <?php the_title();?>
  </h1>
</header>

<?php $projects = get_field('partner_projects'); ?>
<?php if( $projects ): ?>
  <div class="row">
  <?php foreach( $projects as $project): ?>
    <article <?php post_class('c-post mb-4 col-md-4'); ?>>
      <div class="c-post__card">
        <div class="c-post__thumbnail">
          <a href="<?php the_permalink( $project->ID ); ?>"><?php echo get_the_post_thumbnail($project->ID, 'large'); ?></a>
        </div>

        <div class="c-post__card-desc">
          <h3 class="c-post__title">
            <?php echo get_the_title( $project->ID ); ?>
          </h3>
          <?php
            $excerpt = get_the_excerpt($project->ID);
            $excerpt = substr($excerpt, 0, 60);
            $excerpt = substr($excerpt, 0, strripos($excerpt, " "));
            $result = $excerpt.'... <a href="'.get_the_permalink($project->ID).'">more</a>';
          ?>
          <p><?php echo $result; ?></p>
        </div>
      </div>
    </article>
  <?php endforeach; ?>
  </div>
<?php endif; ?>