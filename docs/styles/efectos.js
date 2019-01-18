$(document).ready(function(){

//EFECTO MENU

	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top:'0'
		}, 2000 + (index * 500));

	});

//EFECTO TITULO CENTRAL

	$('header .texto').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .texto').animate({
			opacity: 1,
			marginTop: '0'
		}, 2000);

//SCROLL MENU

	var acercaDe = $('#acerca-de').offset().top,
		servicios = $('#servicios').offset().top,
		contacto = $('#contacto').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe -10
		}, 900);
	});

	$('#btn-servicios').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios
		}, 900);
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto 
		}, 900);
	});

});