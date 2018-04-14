$(document).ready(function() {
	$('.nav-mobile-btn').on('click', function(e){
		e.preventDefault();
		$('header').toggleClass('active');
		$('.nav').toggleClass('active');
	});
	$('button.add-cart').click(function() {
		$(this).addClass('active');
	});
});