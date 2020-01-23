import $ from "jquery";
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
    var $mapData = $("#mapData");
    if (!$mapData.length) return;

    try {
      $mapData = JSON.parse($mapData.text());
    } catch (err) {
      // if invalid json
      return;
    }

    // Variables for each map property
    let mLat = parseFloat($mapData.lat);
    let mLong = parseFloat($mapData.long);
    let mlabel = $mapData.label;

    // Use the variables to display the map
    var map = new BMap.Map("baidu-map");
    var point = new BMap.Point(mLong, mLat);
    var opts = { type: BMAP_NAVIGATION_CONTROL_SMALL };
    map.addControl(new BMap.NavigationControl(opts));
    map.centerAndZoom(point, 15);

    // Add a marker with the name of location
    function translateCallback(tCoordinates) {
      if (tCoordinates.status == 0) {
        var marker = new BMap.Marker(tCoordinates.points[0]);
        map.addOverlay(marker);
        map.setCenter(tCoordinates.points[0]);
        var label = new BMap.Label(mlabel, {
          offset: new BMap.Size(20, -10)
        });
        marker.setLabel(label);
      }
    }
    var Convertor = new BMap.Convertor();
    Convertor.translate([point], 3, 5, translateCallback);
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
