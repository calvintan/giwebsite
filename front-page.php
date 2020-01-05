<?php get_header(); ?>

<div id="carousel-homepage" class="carousel slide mb-5" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-homepage" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-homepage" data-slide-to="1"></li>
    <li data-target="#carousel-homepage" data-slide-to="2"></li>
    <li data-target="#carousel-homepage" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container">
        <p>Eleven years of initiating positive changes towards a greener China</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <p>Eleven years of eco-learning and actions for a greener China</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <p>700+ community and corporate activities attended by 30,000+ people</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container">
        <p>We are creating a world where individuals can live healthily, in harmony with nature</p>
      </div>
    </div>
  </div>
  <!--
  <a class="carousel-control-prev" href="#carousel-homepage" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-homepage" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  -->
</div>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <main role="main">
        <?php /* get_template_part('loop', 'page'); */ ?>
      </main>
    </div>
  </div>
</div>

<?php get_footer(); ?>