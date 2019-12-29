<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header role="banner" class="mb-4">
  <div class="container">
    <div class="logo">
      <a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html(bloginfo('name')); ?></a>
    </div>
    <?php get_search_form(true); ?>
  </div>

  <div class="container">
    <nav role="navigation" aria-label="<?php esc_html_e('Main Navigation', '_themename') ?>">
      <?php wp_nav_menu(array('theme_location' => 'main-menu')) ?>
    </nav>
  </div>
</header>