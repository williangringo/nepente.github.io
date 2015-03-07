(function() {
  "use strict";

  var isSmallScreen = !window.matchMedia('only screen and (min-device-width: 641px)').matches;

  function startToTop() {
    $().UItoTop({ easingType: 'easeOutQuart' });
  }

  function startStellar() {
    $.stellar({ horizontalScrolling: false });
  }

  function startWow() {
    new WOW().init();
  }

  function startMalarkey() {
    var element = document.querySelector('.malarkey');

    var options = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 2000,
      loop: true,
      postfix: ''
    };

    malarkey(element, options).
    type('desenvolvendo').pause().delete().
    type('esculpindo').pause().delete().
    type('lapidando').pause().delete().
    type('tecendo').pause().delete().
    type('elaborando').pause().delete().
    type('confeccionando').pause().delete();
  }

  $(document).ready(startMalarkey);

  if (!isSmallScreen) {
    $(document).ready(startToTop);
    $(document).ready(startStellar);
    $(document).ready(startWow);
  }

}());
