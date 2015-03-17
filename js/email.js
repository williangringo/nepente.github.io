(function() {
  function enviarEmail(nomeDeOrigem, emailDeOrigem, assunto, texto, cbDeSucesso, cbDeErro) {

    var sucesso = cbDeSucesso || {};
    var erro = cbDeErro || {};

    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        "key": "CmUGeHte5MR76JLu7uyOlg",
        "message": {
          "text": texto,
          "subject": assunto,
          "from_email": emailDeOrigem,
          "from_name": nomeDeOrigem,
          "to": [
            {
              "email": "nepente@nepente.io",
              "name": "nepente",
              "type": "to"
            }
          ]
        }
      },
      success: sucesso,
      error: erro
    });
  }
}());
