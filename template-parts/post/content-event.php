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
        ?>
        <div class="c-post__event-info">
          <ul>
            <li>
              <span>
                <?php echo $date->format('j M Y'); ?>, 
                <?php echo $start_time; ?> – <?php echo $end_time; ?>
              </span>
            </li>
            <li>
              <span>
                <?php echo $start_time; ?> – <?php echo $end_time; ?>
              </span>
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
      <?php if(get_the_post_thumbnail() !== '') { ?>
        <div class="c-post__thumbnail">
          <?php the_post_thumbnail('large'); ?>
        </div>
      <?php } ?>
    </div>
  </div>

  <?php if(get_field('event_subtitle_one') && get_field('event_content_one')): ?>
  <div class="row mt-5">
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
  <div class="row mt-5">
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
  
  <div class="row mt-5">
    <div class="col-md-8 offset-md-4">
      <div class="c-post__inner">
        <div class="c-post__content">
          <?php the_content(); ?>
        </div>
      </div>
    </div>
  </div>

  <?php if ($location): ?>
  <div class="row mt-5">
    <div class="col-md-4">
      <div class="project-subtitle">
        Event Details
      </div>
    </div>
    <div class="col-md-8">
      <div id="qrcode"></div>

      <table class="table table-sm table-borderless">
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
              <i class="far fa-calendar-alt"></i>
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
              <?php the_field('location_metro', $l->ID); ?>
            </td>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </div>
  <script type="application/json" id="event_url"><?= json_encode( $event_url, JSON_UNESCAPED_SLASHES ) ?></script>
  <?php endif; ?>
</article>