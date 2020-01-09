<article>
  <header class="c-page__header">
    <?php if(!is_front_page()) { ?>
      <h1 class="c-page__title">
        <?php the_title(); ?>
      </h1>
    <?php } ?>
  </header>
  <div class="c-page__content">
    <?php the_content(); ?>
  </div>
</article>