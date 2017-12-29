'use strict';

$(function(){

	//set Interval
	var width = 720;
	var animationSpeed = 1000;
	var pause = 5000;
	var currentSlide = 1;

	//cache DOM
	//var $slider = $('#slider');
	//var $slideContainer = $slider.find('.slides');
	//var $slides = $slideContainer.find('slide');

	var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

	var interval;
	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
				currentSlide++;
				if(currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function stopSlider(){
		clearInterval(interval);
	}

	$slideContainer.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	startSlider();
});