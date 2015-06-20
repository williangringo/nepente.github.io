(function() {
  "use strict";

  $('[data-fecha-anuncio]').on('click', function() {
    var seletor = $(this).data('fecha-anuncio');
    $(seletor).hide(400, 'linear');
  });
})();
