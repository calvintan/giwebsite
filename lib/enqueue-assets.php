<?php 

function _themename_assets() {
  wp_enqueue_style('_themename-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all');

  wp_enqueue_style( 'font-awesome', '//use.fontawesome.com/releases/v5.12.0/css/all.css' );

  // wp_enqueue_script('baidu-maps', 'http://api.map.baidu.com/api?v=2.0&ak=IZ1dkV2RFCaecviunzyvAi5MvLUrfUQn', '', null, true);

  wp_enqueue_script('_themename-qrcode-scripts', get_template_directory_uri() . '/dist/assets/js/qrcode.min.js', array(), '1.0.0', true);

  wp_enqueue_script('_themename-scripts', get_template_directory_uri() . '/dist/assets/js/bundle.js', array('jquery'), '1.0.0', true);
}

add_action('wp_enqueue_scripts', '_themename_assets');

?>