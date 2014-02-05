## jQuery.fn.lazyimg

Simple jQuery plugin that shows images when they're in viewport.
It can be useful when you want to reduce some http requests.

It is designed to work with images.

Usage is as follows:

	$('img[lazy-img-url]').lazyimg();

You can also pass options:

	$('img[custom-img-url]').lazyimg({
		offset: 10,
		attr: 'custom-img-url'
	});

Available options include:

 * `offset`: (default: `0`) A number that determinates in which position original image should be loaded. You can pass here also negative value.
 * `attr`: (default: `"lazy-img-url"`) A attrinute that handle original image source.

###Example:

	$('img[lazy-img-url]').lazyimg();
	$(window).scroll(function() {
	  $('img[lazy-img-url]').lazyimg();
	});

In your HTML code you have to modify `img` tags as follows: `<img src="blank.gif" lazy-img-url="/path/to/original/image">`

Live demo: http://lublin.estancje.pl
