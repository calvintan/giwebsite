<article <?php post_class('c-post mb-4'); ?>>
  <div class="row">
    <div class="col-md-12">
      <header class="c-post__header">
        <h1 class="c-post__single-title">
          <?php the_title();?>
        </h1>
      </header>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <?php if('event' == get_post_type()) { ?>
        <?php
          $start_time = get_field('event_start_time');
          $end_time = get_field('event_end_time');
          $location = get_field('event_location');
          
          $date_string = get_field('event_date');
          $date = DateTime::createFromFormat('d/m/Y', $date_string);

          $event_url = get_field('event_qr_code');
          $partners = get_field('event_partners');
        ?>
        <div class="c-post__event-info">
          <ul>
            <li>
              <?php echo $date->format('j M Y'); ?>
            </li>
            <li>
              <?php echo $start_time; ?> – <?php echo $end_time; ?>
            </li>
            <li>
              <?php if( $location ): ?>
                <?php foreach( $location as $l ): ?>
                  <?php echo get_the_title( $l->ID ); ?>
                <?php endforeach; ?>
              <?php endif; ?>
            </li>
          </ul>
        </div>
      <?php } ?>
    </div>
    <div class="col-md-8">
      <?php share_buttons(); ?>
      <?php if(get_the_post_thumbnail() !== '') { ?>
        <div class="c-post__thumbnail">
          <?php the_post_thumbnail('large'); ?>
        </div>
      <?php } ?>
    </div>
  </div>

  <?php if(get_field('event_subtitle_one') && get_field('event_content_one')): ?>
  <div class="row mt-4">
    <div class="col-md-4">
      <div class="project-subtitle">
        <?php the_field('event_subtitle_one'); ?>
      </div>
    </div>
    <div class="col-md-8">
      <div class="project-content">
        <?php the_field('event_content_one'); ?>
      </div>
    </div>
  </div>
  <?php endif; ?>

  <?php if(get_field('event_subtitle_two') && get_field('event_content_two')): ?>
  <div class="row mt-4">
    <div class="col-md-4">
      <div class="project-subtitle">
        <?php the_field('event_subtitle_two'); ?>
      </div>
    </div>
    <div class="col-md-8">
      <div class="project-content">
        <?php the_field('event_content_two'); ?>
      </div>
    </div>
  </div>
  <?php endif; ?>
  
  <div class="row mt-4">
    <div class="col-md-8 offset-md-4">
      <div class="c-post__inner">
        <div class="c-post__content">
          <?php the_content(); ?>
        </div>
      </div>
    </div>
  </div>

  <?php if ($location): ?>
  <div class="row mt-4">
    <div class="col-md-4">
      <div class="project-subtitle">
        Event Details
      </div>
    </div>
    <div class="col-md-8">
      <div class="d-flex event-section">
        <?php if ($event_url) { ?>
          <!-- Hide qrcode and script if there is no event link -->
          <div id="qrcode"></div>
          <script type="application/json" id="event_url"><?= json_encode( $event_url, JSON_UNESCAPED_SLASHES ) ?></script>
        <?php } ?>
  
        <table class="table table-sm table-borderless table-event">
          <tbody>
          <?php foreach( $location as $l ): ?>
            <?php
              $latitude = get_field('location_latitude', $l->ID);
              $longitude = get_field('location_longitude', $l->ID);
              $label = get_the_title( $l->ID );
              $mapData = [
                'lat' => $latitude,
                'long' => $longitude,
                'label' => $label
              ];
            ?>
            <tr>
              <th scope="row">
                <i class="fas fa-calendar-alt"></i>
              </th>
              <td>
                <span><?php echo $date->format('j M Y'); ?></span> 
                <span><?php echo $start_time; ?> – <?php echo $end_time; ?></span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <i class="fas fa-map-marker-alt"></i>
              </th>
              <td>
                <span><?php echo get_the_title( $l->ID ); ?>, </span>
                <span><?php the_field('location_address_one', $l->ID); ?>, </span>
                <span><?php the_field('location_address_two', $l->ID); ?>, <?php the_field('location_city', $l->ID); ?></span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <i class="fas fa-subway"></i>
              </th>
              <td>
                <span><?php the_field('location_metro', $l->ID); ?></span>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="map-links">
                <a href="http://api.map.baidu.com/marker?location=<?php echo $latitude; ?>,<?php echo $longitude; ?>&output=html" rel="noopener noreferrer" target="_blank">View on Baidu Maps</a>
                <a href="https://google.com/maps/@<?php echo $latitude; ?>,<?php echo $longitude; ?>,14z" rel="noopener noreferrer" target="_blank">View on Google Maps</a>
              </td>
            </tr>
          <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <?php endif; ?>

  <?php if( $partners ): ?>
  <div class="row mt-4">
    <div class="col-md-4">
      <div class="project-subtitle">
        Partners
      </div>
    </div>
    <div class="col-md-8">
      <div class="project-partners">
        <?php foreach( $partners as $partner ): ?>    
          <a class="project-partners__logo" target="_blank" rel="noopener noreferrer" href="<?php the_field('partner_url', $partner->ID); ?>">
            <img src="<?php the_field('partner_logo', $partner->ID); ?>" alt="<?php echo get_the_title( $partner->ID ); ?>">
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
  <?php endif; ?>

  <?php if(is_single()) { ?>
    <footer class="c-post__footer">
      <?php
      if(has_tag()) {
          echo '<div class="c-post__tags">';
          $tags_list = get_the_tag_list( '<ul><li>', '</li><li>', '</li></ul>' );
          echo $tags_list;
          echo "</div>";
      }
      ?>
    </footer>
  <?php } ?>
</article>