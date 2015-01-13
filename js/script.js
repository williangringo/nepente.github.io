/* Stellar.js */
$(window).load(function() {
  if ($('html').hasClass('desktop')) {
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: -50
    });
  }
});

/* Video library */
$(document).ready(function () {
  $("#home").vide("video/video", {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: "50% 50%" // Alignment
  });
  
  $('#home video').fadeOut(0).delay(50).fadeIn(800);  
});

/* Wow js */
$(window).load(function () {
  if ($('html').hasClass('desktop')) {
    new WOW().init();
  }
});

/* ToTop */
$(document).ready(function () {
  $().UItoTop({ easingType: 'easeOutQuart' });
});

/* Copyright Year */
var now = new Date();
$(document).ready(function() {
  $("#copyright-year").text(now.getFullYear());
});


/* Orientation tablet fix */
$(document).ready(function() {
  // IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
	var ua = navigator.userAgent;
	
	function gestureStart() {
	  viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
	}

	function scaleFix() {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	}

	scaleFix();
});

var ua = navigator.userAgent.toLocaleLowerCase();
var regV = /ipod|ipad|iphone/gi;
var result = ua.match(regV);
var userScale = "";

if (!result) {
  userScale=",user-scalable=0";
}

document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');