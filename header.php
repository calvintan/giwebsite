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

