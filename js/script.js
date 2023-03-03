// Banner part Slider
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
// Back2Top
var btn = $("#b2tbutton");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } 
    else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
    });
// Client part Slider
$('.client_slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: false,
  pauseOnFocus: false,
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
// About part CounterUP
jQuery(document).ready(function($) {
  $('.counterjs').counterUp({
      delay: 10,
      time: 1000
  });
});