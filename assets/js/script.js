const form = document.getElementById('chamadoForm');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const dados = {
        data: {
          nome: form.nome.value,
          email: form.email.value,
          departamento: form.departamento.value,
          problema: form.problema.value
        }
      };

      fetch('https://sheetdb.io/api/v1/SEU_HASH_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      .then(response => response.json())
      .then(data => {
        mensagem.textContent = "Chamado enviado com sucesso!";
        form.reset();
      })
      .catch(error => {
        mensagem.textContent = "Erro ao enviar chamado. Tente novamente.";
        console.error('Erro:', error);
      });
    });