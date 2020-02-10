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

  $("#teamModal").on("show.bs.modal", function(event) {
    // Get the button that triggered the modal
    const button = $(event.relatedTarget);
    const teamObj = {
      name: button.siblings(".team-member__name").text(),
      pos: button.siblings(".team-member__pos").text(),
      why: button.siblings(".team-member__why").text(),
      email: $.trim(button.siblings(".team-member__email").text()),
      web: $.trim(button.siblings(".team-member__website").text())
    };

    $(this)
      .find(".modal-title")
      .text(teamObj.name);
    $(this)
      .find(".modal-pos")
      .text(teamObj.pos);
    $(this)
      .find(".modal-info")
      .text(teamObj.why);
    $(this)
      .find(".modal-email")
      .text(teamObj.email)
      .prop("href", `mailto:${teamObj.email}`);
    $(this)
      .find(".modal-web")
      .text(teamObj.web)
      .prop("href", teamObj.web);
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
