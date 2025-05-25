document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('chamadoForm');
  const mensagem = document.getElementById('mensagem');
  const agradecimento = document.createElement('div');
  agradecimento.id = 'agradecimento';
  agradecimento.innerHTML = '<h2>Chamado enviado com sucesso!</h2><p>Obrigado por registrar seu problema. Nossa equipe entrará em contato em breve.</p>';
  form.parentNode.insertBefore(agradecimento, form.nextSibling);

  const listaChamados = document.createElement('div');
  listaChamados.id = 'lista-chamados';
  listaChamados.innerHTML = '<h3 style="color: #007bff;">Chamados Recentes:</h3><ul id="lista"></ul>';
  agradecimento.parentNode.insertBefore(listaChamados, agradecimento.nextSibling);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const departamento = form.departamento.value;
    const problema = form.problema.value.trim();

    if (!nome || !email || !departamento || !problema) {
      mensagem.textContent = 'Por favor, preencha todos os campos.';
      mensagem.style.color = 'red';
      return;
    }


  });
});