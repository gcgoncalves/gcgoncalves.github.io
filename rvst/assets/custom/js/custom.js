$(document).ready(function(){
	var backgrounds = ['bg_beige.jpg', 'bg_blue.jpg', 'bg_pink.jpg', 'bg_purple.jpg', 'bg_salmon.jpg']; //should add 'bg.jpg'?
	var bg_index = Math.floor(Math.random() * backgrounds.length);
	$('body').css('background', 'rgba(0, 0, 0, 0) url(assets/custom/img/'+backgrounds[bg_index]+') repeat fixed 50% center / cover');

  $('#release').mouseenter(function(){
    $('.release-label').hide();
    $('.lang-selector').show();
  }).mouseleave(function(){
    $('.release-label').show();
    $('.lang-selector').hide();
  });
  
  $('#release-pt').click(function(){
    $('.release_img.en').hide();
    $('.release_box').show();
    $('.release_img.pt').show();
    $('.home_body').addClass('noscroll');
  });
  $('#release-en').click(function(){
    $('.release_img.pt').hide();
    $('.release_box').show();
    $('.release_img.en').show();
    $('.home_body').addClass('noscroll');
  });
  $('.release_box').click(function(){
    $('.release_box').hide();
    $('.release_img').hide();
    $('.home_body').removeClass('noscroll');
  });
});