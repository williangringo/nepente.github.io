(function(global) {
  var mandrillApiUrl = 'https://mandrillapp.com/api/1.0/messages/send.json';

  function enviarEmail(nomeDeOrigem, emailDeOrigem, assunto, texto) {
    var mandrillMessageSendData = {
      key: 'CmUGeHte5MR76JLu7uyOlg',
      message: {
        text: texto,
        subject: assunto,
        from_email: emailDeOrigem,
        from_name: nomeDeOrigem,
        to: [{ email: 'nepente@nepente.io' }]
      }
    };

    return $.ajax({
      type: 'POST',
      url: mandrillApiUrl,
      contentType: 'application/json;',
      dataType: 'json',
      data: JSON.stringify(mandrillMessageSendData)
    });
  }

  global.enviarEmail = enviarEmail;
})(window || this);
