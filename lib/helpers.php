<?php

function _themename_post_meta() {
  /* translators: %s: Post Date */
  printf(
    esc_html__('Published on %s', '_themename'),
    '<a href="' . esc_url(get_permalink()) . '"><time datetime="' . esc_attr(get_the_date('c')) . '">' . esc_html(get_the_date()) . '</time></a>'
  );
  /* translators: %s: Post Author */
  printf(
    esc_html__(' by %s', '_themename'),
    esc_html(get_the_author())
  );
}

function _themename_readmore_link() {
  echo '<a class="c-post__readmore" href="' . esc_url(get_permalink()) . '" title="' . the_title_attribute(['echo' => false]) . '">';
  /* translators: %s: Post Title */
  printf(
    wp_kses(
      __('Read More', '_themename'),
      [
        'span' => [
          'class' => []
        ]
      ]
    ),
    get_the_title()
  );
  echo '</a>';
}

function get_excerpt() {
  $excerpt = get_the_content();
  $excerpt = preg_replace(" ([.*?])",'',$excerpt);
  $excerpt = strip_shortcodes($excerpt);
  $excerpt = strip_tags($excerpt);
  $excerpt = substr($excerpt, 0, 135);
  $excerpt = substr($excerpt, 0, strripos($excerpt, " "));
  $excerpt = trim(preg_replace( '/\s+/', ' ', $excerpt));
  $excerpt = $excerpt.'... <p class="read-more-link"><a href="'.get_the_permalink().'">Read more</a></p>';
  return $excerpt;
}

function short_title($title) {
  $title_length = strlen($title);

  if ($title_length > 52) {
    $new_title = substr($title, 0, 52) . '...';
    return $new_title;
  } else {
    return $title;
  }
}

function share_buttons() {
  $url = urlencode(get_the_permalink());
  $title = urlencode(html_entity_decode(get_the_title(), ENT_COMPAT, 'UTF-8'));
  $media = urlencode(get_the_post_thumbnail_url(get_the_ID(), 'full'));

  include( locate_template('share-template.php', false, false) );
}

function change_select_title($cat_args) {
  $cat_args['show_option_none'] = __('Filter');
  return $cat_args;
}
add_filter('widget_categories_dropdown_args', 'change_select_title');

function search_filter($query) {
  if ($query->is_search && !is_admin() ) {
    $query->set('post_type', array('post', 'event', 'initiative'));
  }
  return $query;
}
add_filter('pre_get_posts', 'search_filter');

function query_post_type($query) {
	// We do not want unintended consequences.
	if ( is_admin() || ! $query->is_main_query() ) {
		return;
	}

	if ( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {

		// Replace these slugs with the post types you want to include.
		$cptui_post_types = array( 'event' );

		$query->set(
      'post_type',
      array_merge(
				array( 'post' ),
				$cptui_post_types
			)
		);
	}
}
add_filter('pre_get_posts', 'query_post_type');

// Page Slug Body Class
function add_slug_body_class( $classes ) {
  global $post;
  if ( isset( $post ) ) {
    $classes[] = $post->post_type . '-' . $post->post_name;
  }
  return $classes;
}

add_filter( 'body_class', 'add_slug_body_class' );

?>