<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="manifesto">
  <div class="m__wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div class="m__close">
            <a href="#" class="m__btn"></a>
            <p>Close</p>
          </div>
          <?php dynamic_sidebar( 'manifesto' ); ?>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="menu-fullscreen">
  <div class="container-fluid">
    <a href="#" class="menu-close"></a>
    <div class="nav__search">
      <?php get_search_form(true); ?>
    </div>
    <nav role="navigation" aria-label="<?php esc_html_e( 'Main Navigation', '_themename' ) ?>">
      <?php wp_nav_menu( array('theme_location' => 'main-menu') ) ?>
    </nav>
  </div>
</div>
<div class="site-wrap">
  <header role="banner">
    <nav class="nav__main" role="navigation">
      <div class="nav__wrapper">
        <a class="nav__btn" href="#">
          <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/menu.png" alt="">
        </a>

        <a class="nav__manifesto" href="#">Manifesto</a>

        <a class="nav__logo" href="<?php echo esc_url(home_url('/')); ?>">
          <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/gi-logo.png" alt="<?php esc_html(bloginfo('name')); ?>">
        </a>

        <a class="nav__link" href="#">seedsofchange.me</a>

        <div class="nav__search">
          <?php get_search_form(true); ?>
        </div>

        <?php dynamic_sidebar( 'language' ); ?>
      </div>  
    </nav>
  </header>