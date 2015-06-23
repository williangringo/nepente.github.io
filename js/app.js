(function() {
  "use strict";

  var lastId;
  var topMenu = $('.top-bar');
  var topMenuHeight = topMenu.outerHeight();
  var menuItems = $('.top-bar-section', topMenu).find('a');

  var scrollItems = menuItems.map(function() {
    var item = $($(this).attr('href'));
    if (item.length) { return item; }
  });

  menuItems.click(function(e) {
    var href = $(this).attr('href'),
    offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  $(window).scroll(function() {
    var fromTop = $(this).scrollTop() + topMenuHeight;

    var cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop)
        return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : '';

    if (lastId !== id) {
      lastId = id;
      menuItems
      .parent().removeClass('active')
      .end().filter('[href=#' + id + ']').parent().addClass('active');
    }
  });
})();

(function() {
  "use strict";

  var isSmallScreen = !window.matchMedia('only screen and (min-device-width: 641px)').matches;

  function clearFormElements(ele) {
    $(ele).find(':input').each(function() {
      switch(this.type) {
        case 'password':
        case 'select-multiple':
        case 'select-one':
        case 'text':
        case 'email':
        case 'textarea':
        $(this).val('');
        break;
        case 'checkbox':
        case 'radio':
        this.checked = false;
      }
    });
  }

  function startEmail() {
    var frmContato = $('#frmContato');
    frmContato.on('submit', function(evt) {
      evt.preventDefault();
      var form = frmContato[0];
      enviarEmail(form.nome.value, form.email.value, 'Contato site', form.texto.value).done(function(data) {
        clearFormElements(form);
        $('#msgContato').text('Obrigado pelo contato. Em breve retornaremos seu e-mail.');
        $('#msgContato').show();
      }).fail(function(data) {
        $('#msgContato').text('Houve um erro ao enviar o e-mail. Tente novamente mais tarde.');
        $('#msgContato').show();
      });
      return false;
    });
  }

  function startStellar() {
    $.stellar({ horizontalScrolling: false });
  }

  function startMalarkey() {
    var element = document.querySelector('.malarkey');

    var options = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 1500,
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

  $(document).foundation();
  $(document).ready(startEmail);
  $(document).ready(startMalarkey);

  if (!isSmallScreen) {
    $(document).ready(startStellar);
  }

}());
