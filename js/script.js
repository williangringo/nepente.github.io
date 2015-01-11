/* Stellar.js */
$(window).load(function() {
  if ($('html').hasClass('desktop')) {
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: -50
    });
  }
});

/* OWL Carousel */
$(document).ready(function() {
  var owl = $("#owl");
  var owlc = $("#owl-contact");
  var owlt = $(".team-list");
  
  owl.owlCarousel({
    autoPlay: false,
    items : 2, //10 items above 1000px browser width
    itemsDesktop : [1000,2], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,2], // betweem 900px and 601px
    itemsTablet: [767,1], //2 items between 600 and 0
    itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: true
  });
  
  owlc.owlCarousel({
    autoPlay: false,
    items : 1, //10 items above 1000px browser width
    itemsDesktop : [1000,1], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,1], // betweem 900px and 601px
    itemsTablet: [600,1], //2 items between 600 and 0
    itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: true,
    mouseDrag : false
  });

  owlt.owlCarousel({
    autoPlay: false,
    items : 6, //10 items above 1000px browser width
    itemsDesktop : [1500,5], //5 items between 1000px and 901px
    itemsDesktopSmall : [1199,4], // betweem 900px and 601px
    itemsTablet: [979,2], //2 items between 600 and 0
    itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
    mouseDrag : true,
    navigation:true
  });
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

/* Touchtouch library */
$(window).load(function () {
  $('.zoom').touchTouch();
});

/* Count To */
function countT() {
  $(".skill-number").each(function() {
    var $text = $(this);
    var $from = $text.data('from');
    var $to = $text.data('to');
    var $speed = $text.data('speed');
    var currVal = 0;
    var endVal = 0;
    var obj = {};

    obj.getTextVal = function() {
      return $from;
    };

    obj.setTextVal = function(val) {
      currVal = parseInt(val, 10);
      $text.text(currVal);
    };

    obj.setTextVal($from);

    function animate() {
      currVal = obj.getTextVal();
      endVal = $to;
      TweenLite.to(obj, $speed, { setTextVal: endVal, ease: Power2.ease });
    };
    
    animate();
  });
};

$(window).load(function() {
  if ($('html').hasClass('desktop')) {
    $('#statistics').scrollShowTime({ onShow: countT });
  } else {
    countT();
  }
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
var currentYear = now.getFullYear();
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