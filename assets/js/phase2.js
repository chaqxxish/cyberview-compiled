$(document).ready(function () {
  // Standard carousel initiation

  $('.carousel-withthumbnails-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    centerMode: false,
    responsive: [{
      breakpoint: 860,
      settings: { 
        arrows: false,
        dots: true
     }
    }]
  });

  $('.carousel-withthumbnails-thumbnails li').on('click', function  () {
    var load = $(this).find('img').data('url'),
        type = $(this).find('img').data('type');
    $('.carousel-withthumbnails li').html($('<' + type + '>').attr('src', load));
  });

  $('.tabs-title').on('click', function () {
    $('.carousel-withthumbnails ul').resize();
  })

  // slider for township_services
  $('.ts-slider').each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      dots: true,
      focusOnSelect: true,
      appendDots: $(this).prev('.ts-nav'),
      customPaging: function (sldier, i) {
        var name = $(sldier.$slides[i]).data('paging');
        return '<a href="#">' + name + '</a>';
      },
      responsive: [{
        breakpoint: 640,
        settings: { arrows: true }
      }]
    });
  })
  
  $('.mixitup').mixItUp({
    selectors: {
      target: '.columns'
    },
    animation: {
      effects: 'fade'
    },
    callbacks: {
      onMixLoad: function(state) {
        $('.mixitup').resize();
      }
    }
  }); 

  $('select.filter-event').on('change', function(){
    $('.mixitup').mixItUp('filter', this.value);
    console.log(this.value);
  });
})