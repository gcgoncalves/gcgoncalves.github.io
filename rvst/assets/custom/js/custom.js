$(document).ready(function(){
	$("#desktop-bg-selector").on('change', function() {
  		//alert( this.value ); // or $(this).val()
  		$('body').css('background', 'url(assets/custom/img/'+this.value+')');
	});

	$("#mobile-bg-selector").on('change', function() {
  		//alert( this.value ); // or $(this).val()
  		$('body').css('background', 'url(assets/custom/img/'+this.value+')');
	});
});