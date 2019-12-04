<?php

function _themename_sidebar_widgets() {
	register_sidebar( array(
    'id'            => 'primary-sidebar',
		'name'          => esc_html__( 'Primary Sidebar', '_themename' ),
		'description'   => esc_html__( 'Add widgets here.', '_themename' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>'
	) );
}

add_action( 'widgets_init', '_themename_sidebar_widgets' );

?>