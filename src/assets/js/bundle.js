import $ from "jquery";
import "./qrcode.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../../node_modules/jquery.ripples/dist/jquery.ripples-min";

$(document).ready(() => {
  $(".nav__btn, .menu-close").click(function() {
    if ($("body").hasClass("show-nav")) {
      $("body")
        .removeClass("show-nav")
        .addClass("hide-nav");

      setTimeout(function() {
        $("body").removeClass("hide-nav");
      }, 500);
    } else {
      $("body")
        .removeClass("hide-nav")
        .addClass("show-nav");
    }
    return false;
  });

  $(".nav__manifesto, .m__btn").click(function() {
    if ($("body").hasClass("show-manifesto")) {
      $("body")
        .removeClass("show-manifesto")
        .addClass("hide-manifesto");

      setTimeout(function() {
        $("body").removeClass("hide-manifesto");
      }, 500);
    } else {
      $("body")
        .removeClass("hide-manifesto")
        .addClass("show-manifesto");
    }
    return false;
  });

  $("#carousel-homepage").ripples({
    resolution: 1024,
    // dropRadius: 20,
    perturbance: 0.01
  });

  $(function() {
    var $event_url = $("#event_url");
    if (!$event_url.length) return;

    try {
      $event_url = JSON.parse($event_url.text());
    } catch (err) {
      // if invalid json
      return;
    }

    new QRCode(document.getElementById("qrcode"), $event_url);
  });
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    if ($("body").hasClass("show-nav")) {
      $("body")
        .removeClass("show-nav")
        .addClass("hide-nav");

      setTimeout(function() {
        $("body").removeClass("hide-nav");
      }, 500);
    } else {
      $("body")
        .removeClass("hide-nav")
        .addClass("show-nav");
    }
  }
});
