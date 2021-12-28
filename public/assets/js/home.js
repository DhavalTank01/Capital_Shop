$().ready(function () {
  var wSize = $(window).width();
  var cnt = 0;
  if (wSize <= 450) {
    cnt = 1;
  } else {
    cnt = 4;
  }
  $("#slick-carousel-1").slick({
    slidesToShow: cnt,
    slidesToScroll: 1,
    dots: false,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 1000,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  });
  $("#slick-carousel-2").slick({
    slidesToShow: cnt,
    slidesToScroll: 1,
    dots: false,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 1000,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  });
  $("#slick-carousel-3").slick({
    slidesToShow: cnt,
    slidesToScroll: 1,
    dots: false,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 1000,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  });
  $("#slick-carousel-4").slick({
    slidesToShow: cnt,
    slidesToScroll: 1,
    dots: false,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 1000,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  });
  $("#slick-carousel-5").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    adaptiveHeight: true,
    arrows: false,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  });
  $("#slick-carousel-6").slick({
    slidesToShow: cnt,
    slidesToScroll: 1,
    dots: false,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  });
});
