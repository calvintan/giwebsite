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
          <?php dynamic_sidebar( 'footer_four' ); ?>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="f-copyright">
            <div class="f-copyright__left">
              <span>Designed by <a href="#">Matter</a></span>
              <span>Developed by <a href="#">Codesmiths</a></span>
            </div>
            <div class="f-copyright__center"></div>
            <div class="f-copyright__right">
              <span>沪ICP备123456号 &copy; <?php echo date( 'Y' ) ?> Green Initiatives</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <?php wp_footer(); ?>
</body>
</html>