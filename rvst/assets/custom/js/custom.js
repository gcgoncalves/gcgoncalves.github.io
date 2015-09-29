$(document).ready(function(){
	var backgrounds = ['bg_beige.jpg', 'bg_blue.jpg', 'bg_pink.jpg', 'bg_purple.jpg', 'bg_salmon.jpg']; //should add 'bg.jpg'?
	var bg_index = Math.floor(Math.random() * backgrounds.length);
	$('body').css('background', 'rgba(0, 0, 0, 0) url(assets/custom/img/'+backgrounds[bg_index]+') repeat fixed 50% center / cover');

  $('#release').mouseenter(function(){
    $('.release-label').hide();
    $('.lang-selector').show();
  }).mouseleave(function(){
    $('.lang-selector').hide();
    $('.release-label').show();
  });
  
  $('#release-pt').click(function(){
    $('.release_img.en').hide();
    $('.release_box').show();
    $('.release_img.pt').show();
    $('body').addClass('noscroll');
    ga('send', 'event', 'link', 'click', 'release-pt');
  });
  $('#release-en').click(function(){
    $('.release_img.pt').hide();
    $('.release_box').show();
    $('.release_img.en').show();
    $('body').addClass('noscroll');
    ga('send', 'event', 'link', 'click', 'release-en');
  });
  $('.release_box').click(function(){
    $('.release_box').hide();
    $('.release_img').hide();
    $('body').removeClass('noscroll');
    ga('send', 'event', 'link', 'click', 'release-close');
  });
  
  $('.contact').mouseenter(function(){
    $('.contact-text').hide();
    $('.contact-email').show();
  }).mouseleave(function(){
    $('.contact-email').hide();
    $('.contact-text').show();
  });
});