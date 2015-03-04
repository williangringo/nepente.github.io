(function() {
  "use strict";

  function configurarEfeitoMalarkey() {
    var elemento = document.querySelectorAll('.malarkey')[0];

    var opcoes = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 2000,
      loop: true,
      postfix: ''
    };

    malarkey(elemento, opcoes)
      .type('desenvolvendo').pause().delete()
      .type('esculpindo').pause().delete()
      .type('lapidando').pause().delete()
      .type('tecendo').pause().delete()
      .type('elaborando').pause().delete()
      .type('confeccionando').pause().delete();
  };

  configurarEfeitoMalarkey();

  var hasClassDesktop = $('html').hasClass('desktop');

  /* Stellar.js */
  $(window).load(function() {
    if (hasClassDesktop) {
      $.stellar({
        horizontalScrolling: false
      });
    }
  });

  /* Wow js */
  $(window).load(function () {
    if (hasClassDesktop) {
      new WOW().init();
    }
  });

  /* ToTop */
  $(document).ready(function () {
    $().UItoTop({ easingType: 'easeOutQuart' });
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

}());
