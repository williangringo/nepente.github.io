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
function countT(){
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

/* Isotope */
$(document).ready(function() {
  var $container = $('.folio-block');
  
  //Run to initialise column sizes
  updateSize();

  //Load masonry when images all loaded
  $container.init( function(){
    $container.isotope({
      itemSelector : '.folio-thumb',
      layoutMode: 'masonry',
      transformsEnabled: false,
      columnWidth: function( containerWidth ) {
        containerWidth = $browserWidth;
      }
    });
  });

  // update columnWidth on window resize
  $(window).smartresize(function(){
    updateSize();
  });

  //Set item size
  function updateSize() {
    $browserWidth = $container.width();
    $cols = 3;

    if ($browserWidth >= 767 && $browserWidth < 995) {
      $cols = 3;
    } else if ($browserWidth >= 479 && $browserWidth < 767) {
      $cols = 2;
    } else if ($browserWidth < 479) {
      $cols = 2;
    }

    $browserWidth = $browserWidth; // - $gutterTotal;
    $itemWidth = $browserWidth / $cols;
    $itemWidth = Math.floor($itemWidth);

    $(".folio-thumb").each(function(index) {
      $(this).css({ "width": $itemWidth + "px" });
    });

    var $optionSets = $('.isotope-list');
    var $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {
      var $this = $(this);
      // don't proceed if already selected
      if ($this.hasClass('active')) {
        return false;
      }
      var $optionSet = $this.parents('.isotope-list');

      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {};
      var key = $optionSet.attr('data-option-key');
      var value = $this.attr('data-filter');
      
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[key] = value;
      
      if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
        changeLayoutMode($this, options);
      } else {
        $container.isotope(options);
      }

      return false;
    });
  };
});


function folioanimate() {
  TweenLite.to('.anim', 1, {delay:1, scale:1, ease: Power2.ease});
}

$(window).load(function() {
  if ($('html').hasClass('desktop')) {
    TweenLite.to('.anim', 0.1, { delay: 0, scale: 0, ease: Power2.ease });
    $('#folio').scrollShowTime({ onShow: folioanimate });
  } else {
    folioanimate();
  }
});


/* Wow js */
$(window).load(function () {
  if ($('html').hasClass('desktop')) {
    new WOW().init();
  }
});

/* ToTop */
$(function () {
  $().UItoTop({ easingType: 'easeOutQuart' });
});

/* Copyright Year */
var now = new Date();
var currentYear = now.getFullYear();
$(document).ready(function() {
  $("#copyright-year").text(now.getFullYear());
});


/* Orientation tablet fix */
$(function(){
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