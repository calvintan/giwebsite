<?php
  /* Custom columns for Member post type */
  function add_member_acf_columns ( $columns ) {
    return array_merge ( $columns, array ( 
      'photo' => __ ( 'Photo' ),
      'member_type' => __ ( 'Type' ),
      'member_position'   => __ ( 'Position' ) 
    ) );
  }
  add_filter ( 'manage_member_posts_columns', 'add_member_acf_columns' );

  function member_custom_column ( $column, $post_id ) {
    switch ( $column ) {
      case 'photo' :
        echo get_the_post_thumbnail( $post_id, 'profile-size' );
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

  function set_custom_member_sortable_columns( $columns ) {
    $columns['member_type'] = 'member_type';

    return $columns;
  }

  add_filter( 'manage_edit-member_sortable_columns', 'set_custom_member_sortable_columns' );

  /* Custom columns for Event post type */
  function add_event_acf_columns ( $columns ) {
    return array_merge ( $columns, array ( 
      'photo' => __ ( 'Photo' ),
      'event_date' => __ ( 'Date' ),
      'event_start_time' => __ ( 'Start Time' ),
      'event_end_time'   => __ ( 'End Time' ) 
    ) );
  }
  add_filter ( 'manage_event_posts_columns', 'add_event_acf_columns' );

  function event_custom_column ( $column, $post_id ) {
    switch ( $column ) {
      case 'photo' :
        echo get_the_post_thumbnail( $post_id, 'feature-size' );
        break;
      case 'event_date':
        $date = get_post_meta ( $post_id, 'event_date', true );
        echo date('j F Y', strtotime($date));
        break;
      case 'event_start_time':
        echo get_post_meta ( $post_id, 'event_start_time', true );
        break;
      case 'event_end_time':
        echo get_post_meta ( $post_id, 'event_end_time', true );
        break;
    }
  }
  add_action ( 'manage_event_posts_custom_column', 'event_custom_column', 10, 2 );

  /* Custom columns for Project post type */
  function add_project_acf_columns ( $columns ) {
    return array_merge ( $columns, array ( 
      'photo' => __ ( 'Photo' ),
      'project_start_date' => __ ( 'Start Date' ),
      'project_end_date'   => __ ( 'End Date' ) 
    ) );
  }
  add_filter ( 'manage_project_posts_columns', 'add_project_acf_columns' );

  function project_custom_column ( $column, $post_id ) {
    switch ( $column ) {
      case 'photo' :
        echo get_the_post_thumbnail( $post_id, 'feature-size' );
        break;
      case 'project_start_date':
        $start_date = get_post_meta ( $post_id, 'project_start_date', true );
        echo date('j F Y', strtotime($start_date));
        break;
      case 'project_end_date':
        $end_date = get_post_meta ( $post_id, 'project_end_date', true );
        echo date('j F Y', strtotime($end_date));
        break;
    }
  }
  add_action ( 'manage_project_posts_custom_column', 'project_custom_column', 10, 2 );

  /* Custom columns for Partner post type */
  function add_partner_acf_columns ( $columns ) {
    return array_merge ( $columns, array ( 
      'partner_logo' => __ ( 'Logo' )
    ) );
  }
  add_filter ( 'manage_partner_posts_columns', 'add_partner_acf_columns' );

  function partner_custom_column ( $column, $post_id ) {
    switch ( $column ) {
      case 'partner_logo' :
        $image_id = get_post_meta ( $post_id, 'partner_logo', true );
        $image = wp_get_attachment_image_src($image_id, 'logo-size');
        echo '<img width="'.$image[1].'" height="'.$image[2].'" src='.$image[0].'>';
        break;
    }
  }
  add_action ( 'manage_partner_posts_custom_column', 'partner_custom_column', 10, 2 );
?>