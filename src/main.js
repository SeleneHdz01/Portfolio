//Responsive
$(function() {
  menu = $("nav ul");

  $("#openup").on("click", function(event) {
    event.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    let w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function() {
    let w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});
