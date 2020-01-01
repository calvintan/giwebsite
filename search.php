<?php get_header(); ?>

<div class="container">
  <div class="row">
    <header>
      <h1>
        <?php printf(esc_html__('Search results for: %s', '_themename'), get_search_query()); ?>
      </h1>
    </header>
  </div>
  <div class="row">
    <div class="col-md-<?php echo is_active_sidebar('primary-sidebar') ? '8' : '12'; ?>">
      <main role="main">
        <?php get_template_part('loop', 'search'); ?>
      </main>
    </div>
    <?php if(is_active_sidebar('primary-sidebar')) { ?>
      <div class="col-md-4">
        <?php get_sidebar(); ?>
      </div>
    <?php } ?>
  </div>
</div>

<?php get_footer(); ?>
