$(document).ready(function(){
  $(".section-about").addClass('about-is-visible');
  $('.section-mograph').addClass('section-mograph-is-visible');
  $('li').addClass('nav-is-visible');

  $(window).scroll(function(){
    shrinkHeader();
    showWeb();
  });
  function shrinkHeader(){
    if($(document).scrollTop() > 100) {
        $('header').addClass('header-small');
        $('.home-sections').css('transform','translateY(-200px)');
    } else {
        $('header').removeClass('header-small');
        $('.home-sections').css('transform','translateY(0px)');
    }
  };
  function showWeb(){
    var wScroll = $(window).scrollTop();
    if($('.section-web').offset().top - 800 < wScroll){
      $('.section-web').addClass('web-visible');
    }
    if($('.section-editorial').offset().top - 800 < wScroll){
      $('.section-editorial').addClass('editorial-visible');
    }
    if($('.section-illustration').offset().top - 800 < wScroll){
      $('.section-illustration').addClass('illustration-visible');
    }
    if($('.section-3d').offset().top - 800 < wScroll){
      $('.section-3d').addClass('is-visible');
    }
    if($('.section-flash').offset().top - 1000 < wScroll){
      $('.section-flash').addClass('flash-visible');
    }
    if($('.circle').offset().top - 100 < wScroll){
      $('.circle').addClass('circle-visible');
    }
    if($('.square-2').offset().top - 800 < wScroll){
      $('.square-2').addClass('square-visible');
    }
      $('.square-web').delay(2000);
  };

    var offset= 300,
    offset_opacity= 1200,
    scroll_top_duration = 700,
    $back_to_top= $('.top')
    $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
      $back_to_top.addClass('cd-fade-out');
    }
    });

    $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
      );
    });
  (function ($){
    var $mobileNavToggleBtn = $('.mobile-nav-toggle');

    function onBtnClick (e) {
        var $this = $(this),
            $selectors = $('.mobile-nav');

        $this.toggleClass('is-open');
        $selectors.toggleClass('is-open');
    }
    $(document).ready(function(){
        $mobileNavToggleBtn.on('click', onBtnClick);
    });

  })(jQuery);
});
