<?php

function _themename_register_menus() {
  register_nav_menus(array(
    'main-menu' => esc_html__('Main Menu', '_themename'),
    'footer-menu' => esc_html__('Footer Menu', '_themename')
  ));
}
add_action('init', '_themename_register_menus');

function register_navwalker(){
	require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
}
add_action( 'after_setup_theme', 'register_navwalker' );

?>