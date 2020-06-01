  <footer class="footer-homepage py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <?php dynamic_sidebar( 'footer_one' ); ?>
        </div>
        <div class="col-md-3">
          <?php dynamic_sidebar( 'footer_two' ); ?>
        </div>
        <div class="col-md-3">
          <?php dynamic_sidebar( 'footer_three' ); ?>
        </div>
        <div class="col-md-3">
          <ul class="menu-social">
            <li><a href="https://www.facebook.com/greeninitiatives" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
            <li><button type="button" data-toggle="modal" data-target="#qrModal"><i class="fab fa-weixin"></i></button></li>
            <li><a href="#" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
            <li><a href="http://www.linkedin.com/groups/Green-Drinks-China-3691430?gid=3691430&trk=hb_side_g" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
          <?php dynamic_sidebar( 'footer_four' ); ?>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="f-copyright">
            <div class="f-copyright__left">
              <span><?php esc_html_e( 'Designed by', '_themename' ); ?> <a href="http://www.matter-sh.com" target="_blank" rel="noopener noreferrer">Matter</a></span>
              <span><?php esc_html_e( 'Developed by', '_themename' ); ?> <a href="https://www.codesmiths.co"  target="_blank" rel="noopener noreferrer">Codesmiths</a></span>
            </div>
            <div class="f-copyright__center"></div>
            <div class="f-copyright__right">
              <span>沪ICP备16054688号 &copy; <?php echo date( 'Y' ) ?> <?php esc_html_e( 'Green Initiatives', '_themename' ); ?>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Modal -->
  <div class="modal fade" id="qrModal" tabindex="-1" role="dialog" aria-labelledby="qrModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <img src="<?php bloginfo('stylesheet_directory'); ?>/dist/assets/images/qr-code.jpg" alt="QR Code">
        </div>
      </div>
    </div>
  </div>
</div>
<?php wp_footer(); ?>
</body>
</html>