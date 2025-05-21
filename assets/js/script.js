document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('chamadoForm');
  const mensagem = document.getElementById('mensagem');
  const agradecimento = document.createElement('div');
  agradecimento.id = 'agradecimento';
  agradecimento.innerHTML = '<h2>Chamado enviado com sucesso!</h2><p>Obrigado por registrar seu problema. Nossa equipe entrará em contato em breve.</p>';
  form.parentNode.insertBefore(agradecimento, form.nextSibling);

  

});