var carouselWidth = $('.carousel-inner')[0].scrollwidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
      console.log('next');
      { scrollPosition = scrollPosition + cardWidth;  
      $(".carousel-inner").animate({ scrollLeft: scrollPosition },600);}
  });

  $(".carousel-control-prev").on("click", function () {
    console.log('prev');
    { scrollPosition = scrollPosition - cardWidth;  
    $(".carousel-inner").animate({ scrollLeft: scrollPosition },600);
  }
});

$('.carousel').carousel({
    interval: false,
  });