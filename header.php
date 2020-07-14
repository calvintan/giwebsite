<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php wp_head(); ?>
  <link rel="shortcut icon" href="<?php bloginfo('stylesheet_directory'); ?>/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('stylesheet_directory'); ?>/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('stylesheet_directory'); ?>/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('stylesheet_directory'); ?>/apple-touch-icon.png">
  <script src="https://kit.fontawesome.com/a0108bb788.js" crossorigin="anonymous"></script>
</head>
<body <?php body_class(); ?>>
<div id="manifesto">
  <div class="m__wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div class="m__close">
            <a href="#" class="m__btn"></a>
            <p>
              <?php esc_html_e( 'Close', '_themename' ); ?>
            </p>
          </div>
          <?php dynamic_sidebar( 'manifesto' ); ?>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="menu-fullscreen">
  <div class="container-fluid">
    <div class="nav__search">
      <?php get_search_form(true); ?>
    </div>
    <nav role="navigation" aria-label="<?php esc_html_e( 'Main Navigation', '_themename' ) ?>">
      <?php wp_nav_menu( array('theme_location' => 'main-menu') ) ?>
    </nav>
  </div>
</div>
<div class="menu-btn">
  <a class="nav__btn" href="#"></a>
</div>
<div class="site-wrap">
  <header role="banner">
    <nav class="nav__main fixed-top" role="navigation">
      <div class="nav__wrapper">

        <a class="nav__manifesto" href="#">
          <?php esc_html_e( 'Manifesto', '_themename' ); ?>
        </a>

        <a class="nav__logo" href="<?php echo esc_url(site_url()); ?>">
          <img class="hide_mobile" src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/gi-logo.png" alt="<?php esc_html(bloginfo('name')); ?>">
          <img class="hide_desktop" src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/gi-icon.png" alt="<?php esc_html(bloginfo('name')); ?>">
        </a>
        
        <div class="nav__search">
          <?php get_search_form(true); ?>
        </div>

        <?php dynamic_sidebar( 'language' ); ?>
      </div>  
    </nav>
  </header>