$(function(){

  $('.prev').on('click', function(){
    slider.goToPrevSlide();
  });

  $('.next').on('click', function(){
    slider.goToNextSlide();
  });

});

function onSlideBefore(slide, old_index, new_index){
	var href = slide.data('href');
	
	$('.slider-link').attr('href', href);

}