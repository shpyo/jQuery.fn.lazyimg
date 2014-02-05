$.fn.lazyimg = function(options) {

  if(!options) {
    options = {};
  }
  options.offset = options.offset || 0;
  options.attr = options.attr || 'lazy-img-url';

  $(this).each(function() {
    
    var $img = $(this),
      windowHeight,
      scrollTop,
      imgTop;
    
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
