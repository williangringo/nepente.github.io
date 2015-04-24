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
      enviarEmail(form.nome.value, form.email.value, form.assunto.value, form.texto.value).done(function(data) {
        clearFormElements(form);
        $('#msgContato').text('Obrigado pelo contato. Em breve retornaremos seu e-mail.');
        $('#msgContato').show();
      }).fail(function(data) {
        console.log(data);
        $('#msgContato').text('Houve um erro ao enviar o e-mail. Tente novamente mais tarde.');
        $('#msgContato').show();
      });
      return false;
    });
  }

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
    $(document).ready(startToTop);
    $(document).ready(startStellar);
    $(document).ready(startWow);
  }

}());
