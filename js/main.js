

jQuery(function($) {

	console.log("Pełne wywołanie JS od nowa");

	// LIT - data konferencji
	var conferenceDate = "Jun 23, 2019 18:00:00";
	

	// ██╗  ██╗ █████╗ ██████╗ ██╗   ██╗███████╗███████╗██╗      █████╗ 
	// ██║ ██╔╝██╔══██╗██╔══██╗██║   ██║╚══███╔╝██╔════╝██║     ██╔══██╗
	// █████╔╝ ███████║██████╔╝██║   ██║  ███╔╝ █████╗  ██║     ███████║
	// ██╔═██╗ ██╔══██║██╔══██╗██║   ██║ ███╔╝  ██╔══╝  ██║     ██╔══██║
	// ██║  ██╗██║  ██║██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
	// ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
																																	 
	
	

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

	// //Ajax contact
	// var form = $('.contact-form');
	// form.submit(function () {
	// 	$this = $(this);
	// 	$.post($(this).attr('action'), function(data) {
	// 		$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
	// 	},'json');
	// 	return false;
	// });


	
	// ██████╗ ██╗  ██╗   ██╗███╗   ██╗███╗   ██╗██╗   ██╗    ███████╗ ██████╗██████╗  ██████╗ ██╗     ██╗     
	// ██╔══██╗██║  ╚██╗ ██╔╝████╗  ██║████╗  ██║╚██╗ ██╔╝    ██╔════╝██╔════╝██╔══██╗██╔═══██╗██║     ██║     
	// ██████╔╝██║   ╚████╔╝ ██╔██╗ ██║██╔██╗ ██║ ╚████╔╝     ███████╗██║     ██████╔╝██║   ██║██║     ██║     
	// ██╔═══╝ ██║    ╚██╔╝  ██║╚██╗██║██║╚██╗██║  ╚██╔╝      ╚════██║██║     ██╔══██╗██║   ██║██║     ██║     
	// ██║     ███████╗██║   ██║ ╚████║██║ ╚████║   ██║       ███████║╚██████╗██║  ██║╚██████╔╝███████╗███████╗
	// ╚═╝     ╚══════╝╚═╝   ╚═╝  ╚═══╝╚═╝  ╚═══╝   ╚═╝       ╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝
																																																					
	
	

	//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	//scrollspy
	// $('[data-spy="scroll"]').each(function () {
	// 	var $spy = $(this).scrollspy('refresh');
	// })

	//PrettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});



	

	
	
	// ███╗   ███╗ █████╗ ██████╗  █████╗ 
	// ████╗ ████║██╔══██╗██╔══██╗██╔══██╗
	// ██╔████╔██║███████║██████╔╝███████║
	// ██║╚██╔╝██║██╔══██║██╔═══╝ ██╔══██║
	// ██║ ╚═╝ ██║██║  ██║██║     ██║  ██║
	// ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝
																		 
	
	

	//https://hpneo.github.io/gmaps/examples.html
    $(document).ready(function(){
	  //prettyPrint();
	  var map;
      map = new GMaps({
        div: '#map',
        lat: -12.043333,
        lng: -77.028333
      });
      map.addMarker({
        lat: -12.043333,
        lng: -77.03,
        title: 'Lima',
        details: {
          database_id: 42,
          author: 'HPNeo'
        },
        click: function(e){
          if(console.log)
            console.log(e);
          alert('Do not click here');
        }
      });
      map.addMarker({
        lat: -12.042,
        lng: -77.028333,
        title: 'Marker with InfoWindow',
        infoWindow: {
          content: '<p>Conference halls</p>'
        }
      });
		});
		


	
// ██████╗ ██╗   ██╗███╗   ██╗ █████╗ ███╗   ███╗██╗ ██████╗███████╗███╗   ██╗███████╗    ██╗      █████╗ ██████╗  ██████╗ ██╗    ██╗ █████╗ ███╗   ██╗██╗███████╗    ██████╗  ██████╗ ██████╗ ███████╗████████╗██████╗  ██████╗ ███╗   ██╗
// ██╔══██╗╚██╗ ██╔╝████╗  ██║██╔══██╗████╗ ████║██║██╔════╝╚══███╔╝████╗  ██║██╔════╝    ██║     ██╔══██╗██╔══██╗██╔═══██╗██║    ██║██╔══██╗████╗  ██║██║██╔════╝    ██╔══██╗██╔═══██╗██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗████╗  ██║
// ██║  ██║ ╚████╔╝ ██╔██╗ ██║███████║██╔████╔██║██║██║       ███╔╝ ██╔██╗ ██║█████╗      ██║     ███████║██║  ██║██║   ██║██║ █╗ ██║███████║██╔██╗ ██║██║█████╗      ██████╔╝██║   ██║██║  ██║███████╗   ██║   ██████╔╝██║   ██║██╔██╗ ██║
// ██║  ██║  ╚██╔╝  ██║╚██╗██║██╔══██║██║╚██╔╝██║██║██║      ███╔╝  ██║╚██╗██║██╔══╝      ██║     ██╔══██║██║  ██║██║   ██║██║███╗██║██╔══██║██║╚██╗██║██║██╔══╝      ██╔═══╝ ██║   ██║██║  ██║╚════██║   ██║   ██╔══██╗██║   ██║██║╚██╗██║
// ██████╔╝   ██║   ██║ ╚████║██║  ██║██║ ╚═╝ ██║██║╚██████╗███████╗██║ ╚████║███████╗    ███████╗██║  ██║██████╔╝╚██████╔╝╚███╔███╔╝██║  ██║██║ ╚████║██║███████╗    ██║     ╚██████╔╝██████╔╝███████║   ██║   ██║  ██║╚██████╔╝██║ ╚████║
// ╚═════╝    ╚═╝   ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝ ╚═════╝╚══════╝╚═╝  ╚═══╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝    ╚═╝      ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
	
		
		$(document).ready(function() {			
			console.log("Przeładował się url");
			reloadPage();			
	 });

		$(document).ready(function() {			
			var projectContainer = $('#sectionToSwitch');
			$('.page-loader').on('click', function(ev) {
				  console.log("Kliknięto na link");
					var href = $(this).attr('href')+' #sectionToSwitch';
					console.log("adres z HREF to: " + href);					
					ev.preventDefault();
					projectContainer.load(href, loadJs);
					console.log("po załadowaniu kontenera");					
					history.pushState({},'',window.location);
					var urlToReplace = window.location.href.substr(0,window.location.href.indexOf("#")) + "#" + $(this).attr('href').replace(".html","");
					window.location.replace(urlToReplace);					
					console.log("url to replace to " + urlToReplace);					
					//window.location.href = window.location.href.substr(0,window.location.href.indexOf("#")) + "#" + $(this).attr('href').replace(".html","");
					//window.location.hash = $(this).attr('href').replace(".html","");					
					$("#main-slider").remove();					
			});			
	 });

	 function reloadPage() {
		if(window.location.hash.length > 0) {
			var projectContainer = $('#sectionToSwitch');
			console.log("Kliknięto na link");
			var href = window.location.hash.replace("#","") + ".html" + ' #sectionToSwitch';
			console.log("adres z HREF to: " + href);										
			projectContainer.load(href, loadJs);					
			console.log("Załadowano fragment strony");
			$("#main-slider").remove();
		}				
	 };

	 $(window).on('hashchange', function(){
    // Your code goes here
	}).trigger('reloadPage'); // bind event to the same selector as event-listener


// ██████╗  ██████╗ ██████╗ ███╗   ███╗██╗ █████╗ ███╗   ██╗ █████╗     ██╗      ██████╗  ██████╗  ██████╗ 
// ██╔══██╗██╔═══██╗██╔══██╗████╗ ████║██║██╔══██╗████╗  ██║██╔══██╗    ██║     ██╔═══██╗██╔════╝ ██╔═══██╗
// ██████╔╝██║   ██║██║  ██║██╔████╔██║██║███████║██╔██╗ ██║███████║    ██║     ██║   ██║██║  ███╗██║   ██║
// ██╔═══╝ ██║   ██║██║  ██║██║╚██╔╝██║██║██╔══██║██║╚██╗██║██╔══██║    ██║     ██║   ██║██║   ██║██║   ██║
// ██║     ╚██████╔╝██████╔╝██║ ╚═╝ ██║██║██║  ██║██║ ╚████║██║  ██║    ███████╗╚██████╔╝╚██████╔╝╚██████╔╝
// ╚═╝      ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ 
                                                                                                        



	 $(document).ready(function() {	
		 $("#logo").on('click', function(e) {
			 e.preventDefault();
			 console.log("Kliknięto");
			  if($(this).hasClass("navbar-brand-logo-1")) {
					console.log("miał klasę");
					$(this).removeClass("navbar-brand-logo-1");
					$(this).addClass("navbar-brand-logo-2");					
					return;
				} 
				if($(this).hasClass("navbar-brand-logo-2")) {
					console.log("miał klasę");
					$(this).removeClass("navbar-brand-logo-2");
					$(this).addClass("navbar-brand-logo-3");					
					return;
				} 
				if($(this).hasClass("navbar-brand-logo-3")) {
					console.log("miał klasę");
					$(this).removeClass("navbar-brand-logo-3");
					$(this).addClass("navbar-brand-logo-1");					
					return;
				} 
		 });
	 });


	
	//  ██████╗ ██████╗ ██╗     ██╗ ██████╗███████╗ █████╗ ███╗   ██╗██╗███████╗
	// ██╔═══██╗██╔══██╗██║     ██║██╔════╝╚══███╔╝██╔══██╗████╗  ██║██║██╔════╝
	// ██║   ██║██║  ██║██║     ██║██║       ███╔╝ ███████║██╔██╗ ██║██║█████╗  
	// ██║   ██║██║  ██║██║     ██║██║      ███╔╝  ██╔══██║██║╚██╗██║██║██╔══╝  
	// ╚██████╔╝██████╔╝███████╗██║╚██████╗███████╗██║  ██║██║ ╚████║██║███████╗
	//  ╚═════╝ ╚═════╝ ╚══════╝╚═╝ ╚═════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝
																																					 
	
	

	$(function() {		
		// Set the date we're counting down to
	var countDownDate = new Date(conferenceDate).getTime();
	
	// Update the count down every 1 second
	var x = setInterval(function() {
	
		// Get todays date and time
		var now = new Date().getTime();
	
		// Find the distance between now an the count down date
		var distance = countDownDate - now;
	
		// Time calculations for days, hours, minutes and seconds
		var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
		var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365))/(1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
		// Display the result in the element with id="demo"
		document.getElementById("txtCountdown").innerHTML = "See you in <strong>" + years + "year " + days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s </strong>";
	
		// If the count down is finished, write some text 
		if (distance < 0) {
		clearInterval(x);
		document.getElementById("txtCountdown").innerHTML = "EXPIRED";
		}
	}, 1000);
});


	 function loadJs() {

	 };

	//Isotope
	// $(window).load(function(){
	// 	$portfolio = $('.portfolio-items');
	// 	$portfolio.isotope({
	// 		itemSelector : 'li',
	// 		layoutMode : 'fitRows'
	// 	});
	// 	$portfolio_selectors = $('.portfolio-filter >li>a');
	// 	$portfolio_selectors.on('click', function(){
	// 		$portfolio_selectors.removeClass('active');
	// 		$(this).addClass('active');
	// 		var selector = $(this).attr('data-filter');
	// 		$portfolio.isotope({ filter: selector });
	// 		return false;
	// 	});
	// });
});

