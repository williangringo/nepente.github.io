(function() {
  "use strict";

  function configurarEfeitoMalarkey() {
    var elemento = document.querySelectorAll('.malarkey')[0];

    var opcoes = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 1500,
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

}());
