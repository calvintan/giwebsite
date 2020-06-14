<?php get_header(); ?>

<main role="main">
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <header class="page__header">
          <h1 class="page__title">
            <?php single_post_title(); ?>
          </h1>

          <?php
            $categories = get_terms( 'category', array(
                'order' => 'ASC',
                'hide_empty' => 0
            ) );
          ?>

          <div id="dd" class="dropdown-wrapper" tabindex="1">
            <span>Filter</span>
            <ul class="dropdown-category">
              <?php foreach($categories as $category) : ?>
                <li>
                  <a href="<?php echo esc_url(get_term_link($category)) ?>">
                    <?php echo $category->name ?>
                  </a>
                </li>
              <?php endforeach; ?>
            </ul>
          </div>
        </header>
      </div>
    </div>
    <div class="row">
      <?php get_template_part('loop', 'index'); ?>
    </div>
  </div>
</main>

<?php get_footer(); ?>