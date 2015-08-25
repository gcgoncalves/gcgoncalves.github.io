$(document).ready(function(){
	var backgrounds = ['bg_beige.jpg', 'bg_blue.jpg', 'bg_pink.jpg', 'bg_purple.jpg', 'bg_salmon.jpg']; //should add 'bg.jpg'?
	var bg_index = Math.floor(Math.random() * backgrounds.length);
	$('body').css('background', 'rgba(0, 0, 0, 0) url(assets/custom/img/'+backgrounds[bg_index]+') repeat fixed 50% center / cover');  		
});