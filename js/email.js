(function(global) {
  function enviarEmail(nomeDeOrigem, emailDeOrigem, assunto, texto) {
    return $.ajax({
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
      }
    });
  }

  global.enviarEmail = enviarEmail;
})(window || this);
