<?php

require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');

// Example of a custom action hook below
function after_pagination() {
  echo 'test';
}
add_action('_themename_after_pagination', 'after_pagination');

?>