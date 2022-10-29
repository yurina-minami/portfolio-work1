$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    $(".mainvisual img").css("width", 30 + scroll / 10 + "%");
  });

  $(".inview").on("inview", function () {
    $(this).addClass("show");
  });

  $("#gallery").on("inview", function () {
    $(".header").addClass("show");
  });

  $("#access").on("inview", function () {
    $(".bg").toggleClass("show");
  });
});
