<ul class="share-buttons">
  <li>
    <a class="share-button share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $url; ?>" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-facebook-f"></i>
    </a>
  </li>
  <li>
    <a class="share-button share-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $url; ?>&amp;title=<?php echo $title; ?>" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </li>
  <li>
    <a class="share-button share-weibo" href="http://service.weibo.com/share/share.php?title=<?php echo $title; ?>&amp;url=<?php echo $url; ?>" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-weibo"></i>
    </a>
  </li>
  <li>
    <a href="mailto:?subject=<?php echo $title; ?>&amp;body=<?php echo $url; ?>" target="_blank" rel="noopener noreferrer">
      <i class="fas fa-envelope"></i>
    </a>
  </li>
</ul>
