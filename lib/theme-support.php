<?php

function _themename_theme_support() {
  add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_image_size('feature-size', 160, 70, true);
	add_image_size('profile-size', 80, 80, true);
	add_image_size('logo-size', 100, 100, false);
  add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );
}

add_action( 'after_setup_theme', '_themename_theme_support' );

?>