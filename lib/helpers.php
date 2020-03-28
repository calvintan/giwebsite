<?php

function _themename_post_meta() {
  /* translators: %s: Post Date */
  printf(
    esc_html__('Posted on %s', '_themename'),
    '<a href="' . esc_url(get_permalink()) . '"><time datetime="' . esc_attr(get_the_date('c')) . '">' . esc_html(get_the_date()) . '</time></a>'
  );
  /* translators: %s: Post Author */
  printf(
    esc_html__(' by %s', '_themename'),
    '<a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a>'
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
  $excerpt = substr($excerpt, 0, 125);
  $excerpt = substr($excerpt, 0, strripos($excerpt, " "));
  $excerpt = trim(preg_replace( '/\s+/', ' ', $excerpt));
  $excerpt = $excerpt.'... <a href="'.get_the_permalink().'">more</a>';
  return $excerpt;
}

function share_buttons() {
  $url = urlencode(get_the_permalink());
  $title = urlencode(html_entity_decode(get_the_title(), ENT_COMPAT, 'UTF-8'));
  $media = urlencode(get_the_post_thumbnail_url(get_the_ID(), 'full'));

  include( locate_template('share-template.php', false, false) );
}

function change_select_title($cat_args){
$cat_args['show_option_none'] = __('Filter');
return $cat_args;
}
add_filter('widget_categories_dropdown_args', 'change_select_title');

?>