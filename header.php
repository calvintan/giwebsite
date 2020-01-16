<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php wp_head(); ?>
  <style>
    #wpadminbar {
      display: none;
    }
  </style>
</head>
<body <?php body_class(); ?>>
<div id="menu-fullscreen">
  <div class="container-fluid">
    <a href="#" class="menu-close"></a>
    <div class="nav__search">
      <?php get_search_form(true); ?>
    </div>
    <nav role="navigation" aria-label="<?php esc_html_e( 'Main Navigation', '_themename' ) ?>">
      <?php wp_nav_menu( array('theme_location' => 'main-menu') ) ?>
    </nav>
    <ul class="menu-social">
      <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="#"><i class="fab fa-weixin"></i></a></li>
      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
      <li><a href="#">seedsoflife.io</a></li>
    </ul>
  </div>
</div>
<header role="banner">
  <nav class="nav__main <?php if(is_front_page()) { echo "fixed-top"; } ?>" role="navigation">
    <div class="nav__wrapper">
      <a class="nav__btn" href="#">
        <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/menu.png" alt="">
      </a>

      <a class="nav__manifesto" href="#">Manifesto</a>

      <a class="nav__logo" href="<?php echo esc_url(home_url('/')); ?>">
        <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/gi-logo.png" alt="<?php esc_html(bloginfo('name')); ?>">
      </a>

      <a class="nav__link" href="#">seedsoflife.io</a>

      <div class="nav__search">
        <?php get_search_form(true); ?>
      </div>

      <a class="nav__language" href="#">
        <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/gi-zh.png" alt="">
      </a>
    </div>  
  </nav>
</header>

