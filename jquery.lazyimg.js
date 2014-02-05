(function($){

  $.fn.lazyimg = function(options) {
  
    // * Check options and set defaults.
    if(!options) {

      options = {};
    }

    options.offset = options.offset || 0;
    options.attr = options.attr || 'lazy-img-url';
    // ---
  
    $(this).each(function() {
      
      var $img = $(this), // * The image.
        windowHeight, // * Window height.
        scrollTop, // * Scroll top (position).
        imgTop; // * Image top position.
  
      if(!$img.is(':visible')) {

        return;
      }
  
      windowHeight = $(window).height(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop,
      imgTop = $img.offset().top;
  
      if (scrollTop + windowHeight + options.offset > imgTop) {
  
      	$img.attr('src', $img.attr(options.attr));
      }
    });
  };
)(jQuery);
