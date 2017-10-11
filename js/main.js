/* globals
---------------------------------------------------------------------*/

/* document ready
---------------------------------------------------------------------*/
$(document).ready(function() {
    // $('video').hover(function() {
    // 	this.play();
    // }, function() {
    // 	this.pause();
    // 	this.currentTime = 0;
    // });
    
    var $carousel = $('.carousel').flickity({
        // options
        cellAlign: 'center',
	    initialIndex: 3,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        wrapAround: false
    });
    var $slider = $('.slider');
    var flkty = $carousel.data('flickity');

    $carousel.on('select.flickity', function() {
        // update the range slider
        $slider.val(flkty.selectedIndex);
    });

    $slider.on('input', function() {
        // update the flickity slider
        flkty.select(this.value, false, false);
    });
});

/* functions
---------------------------------------------------------------------*/
