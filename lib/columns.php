<?php
  /*
  * Add columns to member post list
  */
  function add_acf_columns ( $columns ) {
    return array_merge ( $columns, array ( 
      'photo' => __ ( 'Photo' ),
      'member_type' => __ ( 'Type' ),
      'member_position'   => __ ( 'Postion' ) 
    ) );
  }
  add_filter ( 'manage_member_posts_columns', 'add_acf_columns' );

  /*
  * Add columns to member post list
  */
  function member_custom_column ( $column, $post_id ) {
    switch ( $column ) {
      case 'photo' :
        echo get_the_post_thumbnail( $post_id, 'profile-small' );
        break;
      case 'member_type':
        echo get_post_meta ( $post_id, 'member_type', true );
        break;
      case 'member_position':
        echo get_post_meta ( $post_id, 'member_position', true );
        break;
    }
  }
  add_action ( 'manage_member_posts_custom_column', 'member_custom_column', 10, 2 );

  /*
  * Add columns to member post list
  */

  function set_custom_member_sortable_columns( $columns ) {
    $columns['member_type'] = 'member_type';

    return $columns;
  }

  add_filter( 'manage_edit-member_sortable_columns', 'set_custom_member_sortable_columns' );
?>