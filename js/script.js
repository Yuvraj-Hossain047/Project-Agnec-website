$('#banner_slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  pauseOnFocus: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$('.client_slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="prev fa-solid fa-angle-left"></i>',
  nextArrow: '<i class="next fa-solid fa-angle-right"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
jQuery(document).ready(function($) {
  $('.counterjs').counterUp({
      delay: 10,
      time: 1000
  });
});