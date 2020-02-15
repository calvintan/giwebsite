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

  $(".site-wrap").click(function() {
    if ($("body").hasClass("show-nav")) {
      $("body")
        .removeClass("show-nav")
        .addClass("hide-nav");

      setTimeout(function() {
        $("body").removeClass("hide-nav");
      }, 500);
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

    // Reset values
    let teamObj = null;
    $(this)
      .find(".modal-email")
      .html("");
    $(this)
      .find(".modal-website")
      .html("");
    $(this)
      .find(".modal-facebook")
      .html("");
    $(this)
      .find(".modal-linkedin")
      .html("");
    $(this)
      .find(".modal-weibo")
      .html("");

    teamObj = {
      name: button.siblings(".team-member__name").text(),
      pos: button.siblings(".team-member__pos").text(),
      why: button.siblings(".team-member__why").text(),
      email: $.trim(button.siblings(".team-member__email").text()),
      web: $.trim(button.siblings(".team-member__website").text()),
      fb: $.trim(button.siblings(".team-member__facebook").text()),
      in: $.trim(button.siblings(".team-member__linkedin").text()),
      wb: $.trim(button.siblings(".team-member__weibo").text())
    };

    for (let key of Object.keys(teamObj)) {
      let val = teamObj[key];
      if (key === "name" && val) {
        $(this)
          .find(".modal-title")
          .text(teamObj.name);
      }
      if (key === "pos" && val) {
        $(this)
          .find(".modal-pos")
          .text(teamObj.pos);
      }
      if (key === "why" && val) {
        $(this)
          .find(".modal-why")
          .text(teamObj.why);
      }
      if (key === "email" && val) {
        $(this)
          .find(".modal-email")
          .html(`<a href="mailto:${teamObj.email}">${teamObj.email}</a>`);
      }
      if (key === "web" && val) {
        $(this)
          .find(".modal-website")
          .html(
            `<a href="${teamObj.web}" target="_blank" rel="noopener noreferrer">${teamObj.web}</a>`
          );
      }
      if (key === "fb" && val) {
        $(this)
          .find(".modal-facebook")
          .html(
            `<a href="${teamObj.fb}" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>`
          );
      }
      if (key === "in" && val) {
        $(this)
          .find(".modal-linkedin")
          .html(
            `<a href="${teamObj.in}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>`
          );
      }
      if (key === "wb" && val) {
        $(this)
          .find(".modal-weibo")
          .html(
            `<a href="${teamObj.wb}" target="_blank" rel="noopener noreferrer"><i class="fab fa-weibo"></i></a>`
          );
      }
    }
  });

  $(".share-button").click(function(e) {
    e.preventDefault();
    let link = $(this).attr("href");
    window.open(link, "", "width=600,height=300");
  });

  const form_interest_last = $("#form-interest .wpcf7-list-item.last input");
  const form_interest_other = $("#form-interest-other");

  const form_found = $("#form-found");
  const form_found_other = $("#form-found-other");

  form_interest_last.on("click", function() {
    if ($(this).is(":checked")) {
      form_interest_other.show();
    } else {
      form_interest_other.hide();
    }
  });

  form_found.on("click", function() {
    let radioText = $('input[name="form-found"]:checked').val();
    if (radioText == "Other") {
      form_found_other.show();
    } else {
      form_found_other.hide();
    }
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
