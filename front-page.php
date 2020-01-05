<?php get_header(); ?>

<div id="carousel-homepage" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-content">
        <p>Eleven years of initiating positive changes towards a greener China</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-content">
        <p>test</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel-homepage" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-homepage" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <main role="main">
        <?php get_template_part('loop', 'page'); ?>
      </main>
    </div>
  </div>
</div>

<?php get_footer(); ?>