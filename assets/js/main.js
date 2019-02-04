(function($) {
  "use strict";

  jQuery(document).ready(function($) {
    $("#menu-triggers-1").on("click", function() {
      $("#off-canvas-1").addClass("active");
      $(".off-canvas-menu-shade").addClass("active");
    });

    $("#menu-triggers-2").on("click", function() {
      $("#off-canvas-2").addClass("active");
      $(".off-canvas-menu-shade").addClass("active");
    });

    $(".menu-close, .off-canvas-menu-shade").on("click", function() {
      $("#off-canvas-1").removeClass("active");
      $("#off-canvas-2").removeClass("active");
      $(".off-canvas-menu-shade").removeClass("active");
    });
    var $window = $(window),
      stickyNav = $("#sticky-nav");

    $window.scroll(function() {
      if (stickyNav.length > 0) {
        if ($window.scrollTop() > 300) {
          stickyNav.addClass("fixed");
        } else {
          stickyNav.removeClass("fixed");
        }
      }
    });

    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top - 72
              },
              600
            );
          }
        }
      });
  });

  jQuery(window).load(function() {});
})(jQuery);
